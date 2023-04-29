const { resolve } = require('path')
const { defineConfig } = require('vite')
const fs = require('fs');

function generateArticles() {
  const dirPath = resolve(__dirname, './dist/articles/');
  const articles = {};

  fs.readdirSync(dirPath).forEach((folderName, index) => {
    articles[index] = resolve(dirPath, folderName, 'index.html');
  });

  return articles;
}

export default {
  root: "./dist",
  build: {
    outDir: "./",
    rollupOptions: {
      input: Object.assign(
        { main: resolve(__dirname, './dist/index.html') },
        generateArticles()
      )
    }
  }
}
