const koa = require('koa')

const app = new koa();
// 2
app.use(async (ctx, next) => {
    await next();
    ctx.response.type='text/plain'

    let postData = ''

    ctx.req.on('data', (data)=> {
        console.log('post', data)
    })
    ctx.response.body='<h1>hello koa</h1>'
    /*
    以下是各种模拟数据
    
    ctx.response.body = {
        // 获取连接
        url: ctx.request.url,
        // 获取解析后的字符串
        query: ctx.request.query,
        // 获取原始数据
        querystring: ctx.request.querystring
    }
    // {"url":"/?search=koa","query":{"search":"koa"},"querystring":"search=koa"}
    **/


})

// 1 当只执行启动服务时，页面访问时不会有任何输出
app.listen(3000, () => {
    console.log('serve is running at port 3000')
})


/**
 * 1 模拟post请求时没有成功
 */