const koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

const app = new koa()
app.use(bodyParser())

router.get('/', async(ctx, next) => {
    ctx.response.type ='text/html'
    ctx.response.body = `
        <form action= '/user/register' method='post'>
            <input name='name' type='text' />
            </br>
            <input name ='password' type='text' />
            <br />
            <button>点击登录</button>
        </form>
    `
})

router.post('/user/register', async(ctx, next)=> {
    let data = ctx.request.body

    console.log('data', data)
    ctx.response.type ='text/html'
    ctx.response.body = data
})


app.use(router.routes())

app.listen(3000, ()=> {
    console.log('3000')
})