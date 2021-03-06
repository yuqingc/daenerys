const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const app = express();
const matt = express();
//const isProd = process.argv[2] == 'prod';

//console.log(`Express server is: ${process.argv[2] || 'dev'}`);

const port: number = 8888;


matt.use('/', express.static(path.join(__dirname, '../../dist')));

app.use('/lib', express.static(path.join(__dirname, '../../src/lib')))

matt.get('/*', function(req: any, res: any, next: any) {
    res.sendfile(path.join(__dirname, '../../dist/index.html'));
    //直接调用下一个大写字母那种类型的请求的中间件
    next('route');
}, function(req: any, res: any, next: any) {
    console.log("You can see this because the next() function was invoked previously.");
});

matt.get('/*', async function() {
    console.log('This is an async function');
});

//The following middleware is used to handle the 404 status
matt.use(function(req:any, res:any, next:any) {
    res.status(404).send('Sorry cant find that!');
    next();
});

matt.use(function (req: any, res: any, next: any) {
    console.log('Time:', Date.now());
    next();
});

matt.use(function(err:any, req: any, res: any, next: any) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

import rawSchema from './schema';
import resolvers from './resolvers';

console.log('哈哈哈', resolvers);

const logger = { log: (e: any) => console.log(e) }

const schema = makeExecutableSchema({
    typeDefs: rawSchema,
    resolvers,
    logger,
    allowUndefinedInResolve: false,
})

app.use(
    '/graphql', 
    bodyParser.json(), 
    graphqlExpress( (req: any) => { 
        return {
            schema,
            //这个context到时候可以在resolver 的第三个参数里面打印出来
            context: {
                reqInfo: req,
            }
        } 
    }),
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}));

app.use('/matt', matt);

app.use(function(err:any, req: any, res: any, next: any) {
    console.error(err.stack);
    res.status(500).send('Fuck you!');
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('address() is', server.address());
    console.log('Winterfell app listening at http://%s:%s', host, port);
});

/**
 * 前端使用post请求拿数据拿数据
var headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('content-length', '572')

fetch(
	'http://localhost:8888/graphql', 
	{
		method:'POST', 
		body: JSON.stringify({query: "{books{ title }}", variables: null, operationName: null}),
    headers,
	}).then(res => res.json()).then(r => {
		console.log('sbhouyi', r)
	})
 */

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, async function(err: any, db: any) {
    console.log("Connected successfully to server");
    var collection = db.collection('task');
    var res = await collection.find().toArray();
    console.log('查询数据库的结果是', res);
    // db.close();
});