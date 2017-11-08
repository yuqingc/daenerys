const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
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
  plugins: [
    new CleanWebpackPlugin(['dist/*']),//如果只写dist，build 的时候会把整个文件删掉
    new HtmlWebpackPlugin({
        template:'src/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }

};