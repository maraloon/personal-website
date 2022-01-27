module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
