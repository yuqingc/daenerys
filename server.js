const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const config = process.argv[2] == 'prod' ? require('./webpack.prod.js') : require('./webpack.dev.js');
const compiler = webpack(config);

console.log('argv0 is: ', process.argv[2]);

const port  = 3000;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});