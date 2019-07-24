const chalk = require('chalk')
const mongoose = require('mongoose')
// 可以一次性引入多个文件
const glob = require('glob')
const { resolve } = require('path')

const database = 'mongodb://localhost/simble'


    
    exports.initSchemas = () => {
        glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
        // glob.sync(resolve(__dirname,'./schema','**/*.js'),function).forEach(require)
        // return require('./schema/user.js')
    }
    exports.connect = () => {

        // 连接数据库
        mongoose.connect(database, {useNewUrlParser: true})
        let maxConnectTimes = 0

        return new Promise( (resolve, reject) => {
            // 增加数据库的链接时间监听
            mongoose.connection.on('disconnected', () =>{
                console.log('***************数据库断开链接**********************')
                if( maxConnectTimes <= 3) {
                    mongoose.connect(database, {useNewUrlParser: true})
                } else {
                    reject()
                    // throw new Error('数据库出现问题')
                }
           
            })
        
            mongoose.connection.on('error', () => {
                console.log('***************数据库断开链接**********************')
                if( maxConnectTimes <= 3) {
                    mongoose.connect(database,{useNewUrlParser: true})
                } else {
                    reject()
                    // throw new Error('数据库出现问题')
                }
            })
        
            mongoose.connection.once('open', () => {
                console.log(chalk.yellow("mongoDb connected successfully!"))
                resolve()
            })
        })

    }

