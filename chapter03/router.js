const router = require('koa-router')()

const homeParam = require('./controller/home')

const {index, register, home} = homeParam

  module.exports = (app) => {
    router.get('/', index)
    
    router.get('/home', home)
    
    // router.get('/user', login)
    
    // 增加响应表单请求的路由
    router.post('/user/register', register)
    
    app.use(router.routes())
      .use(router.allowedMethods())
  }