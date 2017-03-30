const Koa = require('koa')
const app = new Koa();

app.use(function*(){
  this.body = 'hello from koa: ' + process.env.ENV
})

app.listen(1234)