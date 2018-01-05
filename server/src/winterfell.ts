const Koa = require('koa');
const http = require('http');
const https = require('https');
const app = new Koa();

// x-response-time

app.use(async (ctx:any, next:any) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
  
  // logger
  
app.use(async (ctx:any, next:any) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
  
  // response
  
app.use(async (ctx:any) => {
    ctx.body = 'Hello World';
    console.log('ctx is ', ctx);
});

app.on('error', err => {
    console.error('server error', err)
  });

app.listen(3000, () => {
    console.log("Http server is running at port 3000");
});

// http.createServer(app.callback()).listen(3000);