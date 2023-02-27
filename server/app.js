const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
require('dotenv').config({path: './config.env'})




require('./db/conn');
const {User}= require('./model/userSchema')



app.use(express.json ());
app.use(require('./router/auth'));

app.get('/login', (req, res) => {
   res.send(`hello`);
});




app.listen(8000, () =>{
    console.log(`server is running at port 8000`);
})