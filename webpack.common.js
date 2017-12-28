const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  module: {
      rules: [
          {
              test: /\.scss$/,
              use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", 
                options: {
                    sourceMap: true
                } // translates CSS into CommonJS
            }, {
                loader: "sass-loader", 
                options: {
                    sourceMap: true
                } // compiles Sass to CSS
            }]
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader'
              ]
          },
          { 
            test: /\.tsx?$/, 
            exclude: /node_modules/, 
            use: ["react-hot-loader/webpack", "ts-loader"] 
          }
      ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),//如果只写dist，build 的时候会把整个文件删掉
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
  }

};