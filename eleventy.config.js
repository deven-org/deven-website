const sass = require("sass");

// lib to format time
const { DateTime } = require("luxon");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {
  ["src/assets/fonts/", "src/assets/images/"].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path)
  );
  // eleventyConfig.setDataDeepMerge(true);

  // Adds RSS Feed
  eleventyConfig.addPlugin(pluginRss);

  // Adds syntax highlighting
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // prefixPath
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

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
    outputFileExtension: "css", // optional, default: "html"

    // `compile` is called once per .scss file in the input directory
    compile: async function (inputContent) {
      let result = sass.compileString(inputContent);

      // This is the render function, `data` is the full data cascade
      return async (data) => {
        return result.css;
      };
    },
  });

  if (
    process.env.NODE_ENV !== "production" ||
    process.env.ELEVENTY_SERVERLESS
  ) {
    return {
      templateFormats: ["md", "html", "njk"],
      markdownTemplateEngine: "liquid",
      dataTemplateEngine: "njk",
      dir: {
        input: "src",
        output: "docs",
        includes: "_includes",
        data: "_data",
        styles: "css",
      },
    };
  } else {
    return {
      templateFormats: ["md", "html", "njk"],
      markdownTemplateEngine: "liquid",
      dataTemplateEngine: "njk",
      dir: {
        input: "src",
        output: "docs",
        includes: "_includes",
        data: "_data",
        styles: "css",
      },
      pathPrefix: "/deven-website/",
    };
  }
};
