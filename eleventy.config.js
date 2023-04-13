// Importing from config
const { getPosts, getProjects } = require("./config/collections/index.js");
const sass = require("sass");
const path = require("node:path");
const browserslist = require("browserslist");
const { transform, browserslistToTargets } = require("lightningcss");

// Set default transpiling targets
let browserslistTargets = "> 0.2% and not dead";

// lib to format time
const { DateTime } = require("luxon");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
  // Collections
  eleventyConfig.addCollection("posts", getPosts);
  eleventyConfig.addCollection("projects", getProjects);
  ["src/assets/fonts/", "src/assets/images/"].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path)
  );
  // eleventyConfig.setDataDeepMerge(true);

  // Adds RSS Feed
  eleventyConfig.addPlugin(pluginRss);

  // Adds syntax highlighting
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  const markdown = markdownIt({ html: true, linkify: true }).use(
    markdownItAnchor,
    {
      permalink: true,
      permalinkClass: "bookmark",
      permalinkSymbol: "#",
    }
  );

  eleventyConfig.setLibrary("md", markdown);

  // Move images and css to site folder without compiling
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  // Adds Date Formatting
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("htmlExcerpt", (content) => {
    if (!content) return content;
    const start = content.indexOf("<p>");
    const secondStart = content.indexOf("<p>", start + 1);
    const end = content.indexOf("</p>", secondStart + "<p>".length);
    if (start >= 0 && end > start) {
      return content.substring(start, end + "</p>".length);
    }
    return content;
  });

  // Adds SCSS compiling
  eleventyConfig.addTemplateFormats("scss");

  // Creates the extension for use
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }

      let targets = browserslistToTargets(browserslist(browserslistTargets));

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || "."],
        sourceMap: false,
      });

      this.addDependencies(inputPath, result.loadedUrls);

      return async () => {
        let { code } = await transform({
          code: Buffer.from(result.css),
          minify: true,
          sourceMap: false,
          targets,
        });
        return code;
      };
    },
  });

  return {
    templateFormats: ["md", "html", "njk"],
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data",
      // styles: 'css'
    },
  };
};
