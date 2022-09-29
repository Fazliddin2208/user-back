const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    name:String,
    email:String,
    login: String,
    password: String,
    lastLoginTime: { type : Date, default: Date.now },
    regTime: { type : Date, default: Date.now },
    status: {type: Boolean, default: true}
    
})
const UsersModel = mongoose.model('UsersModel', usersSchema)
module.exports = UsersModel