const mongoose = require('mongoose')

const Schema = mongoose.Schema
console.log('MONGO Model')
const firstSchema =  new Schema({
    title: {
    type:String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3
    },
    content: String
})

const First = mongoose.model('First', firstSchema)

module.exports = First