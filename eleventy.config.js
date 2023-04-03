// Importing from config
const {getPosts, getProjects} = require('./config/collections/index.js');

module.exports = eleventyConfig => {
  // Collections
  eleventyConfig.addCollection('posts', getPosts);
  eleventyConfig.addCollection('projects', getProjects);
  ['src/assets/fonts/', 'src/assets/images/'].forEach(path =>
    eleventyConfig.addPassthroughCopy(path)
  );

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};