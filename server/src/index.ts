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
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
    {
        title: 'A Song of Ice and Fire',
        author: 'George R. R. Martin',
    },
    {
        title: '三国演义',
        author: '罗贯中',
    },
];

const typeDefs = `
    type Query { books: [Book] }
    type Book { title: String, author: String }
`;

const resolvers = {
    Query: { books: async function () {
        let res = await books;
        return res;
    }}
}

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