const mongoose = require('mongoose')

const Schema = mongoose.Schema

let ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
    userId: ObjectId,
    userName: { unique: true, type: String },
    passWord: String,
    createAt: { type: Date, default: Date.now()},
    lastLoginAt: {type: Date, default: Date.now()}
})

mongoose.model('User', userSchema)

