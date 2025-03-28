const sass = require('sass')
const path = require('node:path')

// lib to format time
const { DateTime } = require('luxon')

const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const mila = require("markdown-it-link-attributes");

const {
  EleventyHtmlBasePlugin,
  EleventyRenderPlugin,
} = require('@11ty/eleventy')

module.exports = (eleventyConfig) => {
  ;['src/assets/fonts/', 'src/assets/images/', 'src/assets/tools/', 'src/assets/js/', 'src/assets/favicon/'].forEach(
    (path) => eleventyConfig.addPassthroughCopy(path)
  )
  // favicon.ico also gets copied to the root for compatibility reasons
  eleventyConfig.addPassthroughCopy({
    'src/assets/favicon/favicon.ico': '/favicon.ico',
  })

  // This would merge assembled page data (e.g. arrays in front matter data)
  // instead of overwriting them. There was no need for this so far.
  // eleventyConfig.setDataDeepMerge(true)

  // Adds RSS Feed
  eleventyConfig.addPlugin(pluginRss)

  // Adds syntax highlighting
  eleventyConfig.addPlugin(pluginSyntaxHighlight)

  // prefixPath
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  // Allow rendering files inside a template
  eleventyConfig.addPlugin(EleventyRenderPlugin)

  /* Markdown Plugins */
  let markdownIt = require('markdown-it')
  let markdownItAnchor = require('markdown-it-anchor')
  const markdown = markdownIt({ html: true, linkify: true }).use(
    markdownItAnchor,
    {
      permalink: markdownItAnchor.permalink.headerLink({
        safariReaderFix: true,
        class: 'bookmark',
      }),
    }
  )

  eleventyConfig.setLibrary('md', markdown)

  // Move images and css to site folder without compiling
  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy('css')

  // Adds Date Formatting
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('dd LLL yyyy')
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd')
  })

  eleventyConfig.addFilter('htmlExcerpt', (content) => {
    if (!content) return content
    const start = content.indexOf('<p>')
    const secondStart = content.indexOf('<p>', start + 1)
    const end = content.indexOf('</p>', secondStart + '<p>'.length)
    if (start >= 0 && end > start) {
      return content.substring(start, end + '</p>'.length)
    }
    return content
  })

  // This would be nice for detecting accidental missing values, but
  // unfortunately it produces unintelligible misleading errors.
  // eleventyConfig.setNunjucksEnvironmentOptions({ throwOnUndefined: true })

  // Adapted from https://github.com/11ty/eleventy/issues/853
  // Recreates Nunjucks "block" concept to send child content to a parent
  eleventyConfig.addPairedShortcode('slot', function (fallbackContent, name) {
    return (this.page.slots || {})[name] || fallbackContent
  })

  eleventyConfig.addPairedShortcode('slotcontent', function (content, name) {
    if (!this.page.slots) this.page.slots = {}
    this.page.slots[name] = content
    return ''
  })

  eleventyConfig.addShortcode('usesvg', function (id) {
    if (!this.page.svgIds) this.page.svgIds = new Set()
    this.page.svgIds.add(id)
    return `<use href="#${id}" />`
  })

  eleventyConfig.addShortcode('bail', function (error) {
    throw new Error(error)
  })

  // Adds SCSS compiling
  eleventyConfig.addTemplateFormats('scss')

  // Creates the extension for use
  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css', // optional, default: "html"

    // `compile` is called once per .scss file in the input directory
    compile: async function (inputContent, inputPath) {
      let parsedPath = path.parse(inputPath)

      let result = sass.compileString(inputContent, {
        loadPaths: [parsedPath.dir || '.', './src/_includes'],
      })

      // Makes 11ty invalidate cache when imported scss files (via @use) change
      this.addDependencies(inputPath, result.loadedUrls)

      // This is the render function, `data` is the full data cascade
      return async (data) => {
        return result.css
      }
    },
  })

  // add target="blank" and rel="noopener" to all external links (all links that start with https)
  const milaOptions = {
    matcher(href) {
      return href.match(/^https?:\/\//);
    },
    attrs: {
      target: "_blank",
      rel: "noopener",
    },
  };
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(mila, milaOptions));

  return {
    templateFormats: ['md', 'html', 'njk'],
    markdownTemplateEngine: 'liquid',
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      data: '_data',
      styles: 'css',
    },
  }
}
