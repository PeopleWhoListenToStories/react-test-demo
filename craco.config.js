// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const webpack = require('webpack')
const path = require('path')

module.exports = {
  webpack: {
    alias: {

    },
    // 以下代码！！！  与alias或babel同级
    configure: (webpackConfig, { env, paths }) => {
      // 修改build的生成文件名称
      paths.appBuild = 'react-test-demo-dist';
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'react-test-demo-dist'),
        publicPath: '/'
      }
      return webpackConfig;
    }
  },
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
