// blog posts
const getPosts = (collection) => {
  return collection.getFilteredByGlob("src/posts/**/*.md");
};

// projects
const getProjects = (collection) => {
  return collection.getFilteredByGlob("src/projects/**/*.md");
};

module.exports = {
  getPosts,
  getProjects,
};
