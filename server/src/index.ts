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

// 这里试一下graphql
const books = [
    {
        title: "Harry Potter and the Sorcerer's stone",
        author: '2',
    },
    {
        title: 'Jurassic Park',
        author: '1',
    },
    {
        title: 'A Song of Ice and Fire',
        author: '4',
    },
    {
        title: '三国演义',
        author: '3',
    },
];

const people = [
    {
        _id: '1',
        name: 'Michael Crichton',
        age: 20,
    },
    {
        _id: '2',
        name: 'J.K. Rowling',
        age: 30,
    },
    {
        _id: '3',
        name: '罗贯中',
        age: 300,
    },
    {
        _id: '4',
        name: 'George R. R. Martin',
        age: 60,
    }
];


//Schema
const typeDefs = `
    type Query { 
        books: [Book], 
        author_info: Person, 
        people: [Person] 
    }
    type Book { 
        title: String, 
        author: String, 
        author_info(name: String): Person 
    }
    type Person { 
        name: String, 
        age: Int 
    }
`;

//Model
const resolvers = {
    Query: { 
        books: async function () {
            let res = await books;
            return res;
        },
        author_info: function (author: string) {
            console.log('哈哈哈哈哈哈哈哈', author);
            for (let person of people) {
                if (person._id && person._id === author) return person;
            }
            return null;
        },
        people: function () {
            return people;
        }
}}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

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