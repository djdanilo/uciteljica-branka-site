module.exports = function(eleventyConfig) {

  // Static folders
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });

  // Posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  // Date formatter
  eleventyConfig.addFilter("formatDate", function(dateObj) {
    const date = new Date(dateObj);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}.`;
  });

  // Absolute URL filter
  eleventyConfig.addFilter("absoluteUrl", function(url) {
    return `https://uciteljicabranka.rs${url}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
  eleventyConfig.addCollection("categories", function(collectionApi) {
  const posts = collectionApi.getFilteredByGlob("src/posts/*.md");
  const categoryMap = {};

  posts.forEach(post => {
    const category = post.data.category;
    if (!categoryMap[category]) {
      categoryMap[category] = [];
    }
    categoryMap[category].push(post);
  });

  return categoryMap;
});
};