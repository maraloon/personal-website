module.exports = async (eleventyConfig) => {

  return {
    layout: 'layout.liquid',
    tags: 'blog',
    eleventyComputed: {
      // for some reason fileSlug work another way from doc
      // here fileSlug is filename without format ('File Name' for 'path/to/File Name.md')
      // not 'file-name'
      // if it broke titles in future update, you need to rewrite code and add filename filter
      title: data => data.page.fileSlug,
      permalink: data => 'articles/'+ '{{ page.fileSlug | slug }}'+'/'
    }  
  }
}
