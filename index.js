var http = require('http');
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://'+process.env.MONGOUSER+':'+process.env.MONGOPASS+'@cluster0-lk5dw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
app.get(`/`, (req, res)=>{
    return res.json({'oi':'Hello'})
});
app.use(routes);

app.listen(process.env.PORT);