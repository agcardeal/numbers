const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/style/index.sass";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      plugins: [
        // DirectoryNameWebpackPlugin(true)
      ],
      alias: {
        '@components': resolve('src/components/')
      }
    }
  }





}