const mongoose = require('mongoose')

const Schema = mongoose.Schema
console.log('MONGO Model')
const userSchema =  new Schema({
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

const SignupMongo = mongoose.model('Users', userSchema)

module.exports = SignupMongo