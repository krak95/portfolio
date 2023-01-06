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
    user: {
    type:String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3
    },
    pass: {
    type:String,
    require: true,
    trim: true,
    minlength: 3
    }
})

const signupModel = mongoose.model('users', userSchema)

module.exports = signupModel