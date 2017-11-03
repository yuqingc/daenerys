const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
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
            loader: "babel-loader" 
          }
      ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //     title: 'Long mu'
    // })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }

};