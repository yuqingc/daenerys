const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: [ 'webpack-hot-middleware/client'],
  devtool: 'inline-source-map',//不要用于生产环境
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    //下面三个用于连接express的hot更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});