const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const path = require('path');
const app = express();

const isProd = process.argv[2] == 'prod';

console.log(`Express server is: ${process.argv[2] || 'dev'}`);

const port  = 3000;

if(!isProd){

  const config = require('./webpack.dev.js');
  const compiler = webpack(config);
  
  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

}else{

  app.use('/', express.static(path.join(__dirname, 'dist')));

}


// Serve the files on port 3000.
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});