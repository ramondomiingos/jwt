const mongoose = require('mongoose')

const UserScheema = new mongoose.Schema({
    name:String,
    password:String,
    username:String,
    created_at:Date
})
module.exports = mongoose.model('user', UserScheema)