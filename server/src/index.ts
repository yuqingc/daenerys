const express = require('express');
const path = require('path');
const app = express();

//const isProd = process.argv[2] == 'prod';

//console.log(`Express server is: ${process.argv[2] || 'dev'}`);

const port  = 8888;


app.use('/matt', express.static(path.join(__dirname, '../../dist')));

app.get('/matt/*', function(req: any, res: any, next: any) {
    res.sendfile(path.join(__dirname, '../../dist/index.html'));
    //直接调用下一个大写字母那种类型的请求的中间件
    next('route');
}, function(req: any, res: any, next: any) {
    console.log("You can see this because the next() function was invoked previously.");
});

app.get('/matt/*', async function() {
    console.log('This is an async function');
});

//The following middleware is used to handle the 404 status
app.use(function(req:any, res:any, next:any) {
    res.status(404).send('Sorry cant find that!');
    next();
});

app.use(function (req: any, res: any, next: any) {
    console.log('Time:', Date.now());
    next();
});

app.use(function(err:any, req: any, res: any, next: any) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('address() is', server.address());
    console.log('Winterfell app listening at http://%s:%s', host, port);
});