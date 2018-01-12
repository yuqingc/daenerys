const express = require('express');
const path = require('path');
const app = express();

//const isProd = process.argv[2] == 'prod';

//console.log(`Express server is: ${process.argv[2] || 'dev'}`);

const port  = 8888;


app.use('/', express.static(path.join(__dirname, '../../dist')));

app.get('/*', function(req:any, res:any) {
    res.sendfile(path.join(__dirname, '../../dist/index.html'));
});

// Serve the files on port 8888.
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});