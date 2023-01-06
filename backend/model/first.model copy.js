const mongoose = require('mongoose')

const Schema = mongoose.Schema
console.log('MONGO Model')
const userSchema =  new Schema({
    fname: {
    type:String,
    require: true,
    trim: true,
    minlength: 3
    },
    email: {
    type:String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3
    },
    username: {
    type:String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3
    },
    password: {
    type:String,
    require: true,
    trim: true,
    minlength: 3
    }
})

const User = mongoose.model('Users', userSchema)

module.exports = User