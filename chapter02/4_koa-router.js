const koa = require('koa')
const router = require('koa-router')()

const app = new koa()

// 添加路由

router.get('/', async(ctx, next) => {
    ctx.response.body= '<h1>这是初始页面</h1>'
})

router.get('/home', async(ctx, next) => {
    ctx.response.body = '<h1>home</h1>'
})

router.get('/404', async(ctx, next) => {
    ctx.response.body = '<h1> 404 </h1>'
})


app.use(router.routes())

app.listen(3000, () => {
    console.log('serve is running at 3000')
})