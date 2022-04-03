const { resolve } = require('path')
const { defineConfig } = require('vite')

export default {
  root: "./dist",
  build: {
    outDir: "./",
    rollupOptions: {
      input: {
        main: resolve(__dirname, './dist/index.html'),
        art1: resolve(__dirname, './dist/articles/izbytochnye-nazvaniya-klassov/index.html'),
        art2: resolve(__dirname, './dist/articles/pochemu-ya-rabotayu-tolko-s-laravel/index.html'),
        art3: resolve(__dirname, './dist/articles/zarplata/index.html'),
      }
    }
  }
}
