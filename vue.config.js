const path = require('path');

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        style: path.resolve(__dirname, 'src/style')
      }
    }
  },
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8010',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '/mock'
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        prependData: '@import "~@/style/_variable.less";'
      }
    }
  }
}