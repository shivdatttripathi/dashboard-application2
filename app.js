const express = require('express')
const app= express();
require("dotenv").config();
const cors = require('cors');
const bodyParser = require('body-parser')
 require('./connection/Database');

 app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
 app.use(express.json());

 app.use(require('./router/router'));



app.listen(process.env.PORT,()=>{
    console.log('sever ready');
})

