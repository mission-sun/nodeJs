var mongoose = require('mongoose');
const chalk = require('chalk')
const Router = require('koa-router')
const Koa = require('koa')

const app = new Koa()
// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('mongodb start')
// });

/**
 * mongose 和koa 数据库连接完成
 * 
 */

let userRouter = require('./User.js')
let router = new Router()

// router.get('/', async(ctx) => {
//     ctx.response.body='<h1>我是我的初始页面</h1>'
// })
router.use('/user', userRouter.routes())


// 加载路由的中间件

// app.use(router.routes())
// app.use(router.allowedMethods())

// router.get('/', async(ctx, next) => {
//     ctx.response.body= '<h1>这是初始页面</h1>'
// })

// router.get('/home', async(ctx, next) => {
//     ctx.response.body = '<h1>home</h1>'
// })


app.use(router.routes())

app.listen(3000, () => {
    console.log(chalk.red('serve start at 3000 '))
})

// 引入conncect 

// const { connect, initSchemas } = require('./init.js')

// ; ( async () => {
//     await connect()
//     // 插入一条数据
//     // console.log('initSchema', initSchema)
//     initSchemas()
//     const User = mongoose.model('User')
//     let oneUser = new User({
//         userName: 'smx111',
//         passWord: '1212112'
//     })
//     let  users = await  User.findOne({}).exec()


//     console.log('users', users)
//     oneUser.save().then( () => {
//         console.log(chalk.blue('保存成功'))
//     }).catch( (error) => {
//         // console.log('保存数据失败')
//     })
// })
