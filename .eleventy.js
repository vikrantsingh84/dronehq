module.exports = function(eleventyConfig) {
   
    eleventyConfig.addPassthroughCopy("src/js*");
    eleventyConfig.addPassthroughCopy("src/css*");
    eleventyConfig.addPassthroughCopy("src/img*");

    eleventyConfig.setTemplateFormats([
      "css", // css is not yet a recognized template extension in Eleventy
      "jpg",
      "gif",
      "png",
      "webp",
      "njk"
    ]);

    return{
        dir:{
            input:"src",
            output:"dist"
        }
    };

    


  };