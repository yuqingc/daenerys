const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: [ 'webpack-hot-middleware/client','./src/index.js'],
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader',
              ]
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader'
              ]
          },
          { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: ["babel-loader"] 
          }
      ]
  },
  devtool: 'inline-source-map',//不要用于生产环境
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),//如果只写dist，build 的时候会把整个文件删掉
    new HtmlWebpackPlugin({
        template:'src/index.html'
    }),
    //下面三个用于连接express的hot更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }

};