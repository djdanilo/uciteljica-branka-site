module.exports = function(eleventyConfig) {

  // ADMIN
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  // STATIC ASSETS (pošto ti je input: "src")
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "js": "js" });
  eleventyConfig.addPassthroughCopy({ "css": "css" });

  // POSTS COLLECTION
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  // FORMAT DATE
  eleventyConfig.addFilter("formatDate", function(dateObj) {
    const date = new Date(dateObj);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}.`;
  });

  // CATEGORY LABEL FILTER
  eleventyConfig.addFilter("categoryLabel", function(value) {
    const map = {
      "i-razred": "I razred",
      "ii-razred": "II razred",
      "iii-razred": "III razred",
      "iv-razred": "IV razred"
    };
    return map[value] || value;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};