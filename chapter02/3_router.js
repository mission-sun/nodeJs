const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    if(ctx.path === '/') {
        ctx.response.body='<h1>我是我的初始页面</h1>'
    }
    else {
        await next()
    }
})

app.use(async (ctx, next) => {
    if(ctx.path === '/home') {
        ctx.response.body='<h1>home页面</h1>'
    }else{
        await next()
    }
})

app.use(async (ctx, next) => {
    if(ctx.path == '/404') {
        ctx.response.body='<h1>错误页面</h1>'
    }else {
        await next()
    }
})


app.listen(3000, ()=>{
    console.log('3000 running at the port')
})