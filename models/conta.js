const mongoose = require('mongoose')

const ContaScheema = new mongoose.Schema({
    nome:String,
    banco_nome:String,
    banco_code:Number,
    tipo:String,
    numero:Number,
    created_at:Date,
    userId:String
})
module.exports = mongoose.model('contas', ContaScheema)