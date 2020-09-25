module.exports = function(eleventyConfig) {
   
    eleventyConfig.addPassthroughCopy("src/js*");
    eleventyConfig.addPassthroughCopy("src/css*");
    eleventyConfig.addPassthroughCopy("src/img*");

    
    return{
        dir:{
            input:"src",
            output:"dist",
            includes: "_includes",
            layouts: "_layouts"
        }
    };

    


  };