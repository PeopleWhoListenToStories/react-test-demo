// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const webpack = require('webpack')
module.exports = {
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'https://my-app.leixu.workers.dev',
        changeOrigin: true,
        pathRewrite: {
          '^/api/v1': '/api/v1'
        }
      }
    }
  }
}
