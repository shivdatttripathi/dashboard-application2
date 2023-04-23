const express = require('express')
const app= express();
//require("dotenv").config(); for local server
const cors = require('cors');
const bodyParser = require('body-parser')
const path =require('path')
 require('./connection/Database');



 app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
 app.use(express.json());

 app.use(require('./router/router'));

 const staticpath2 = path.join(__dirname,'./client/build/index.html')
 const staticpath = path.join(__dirname,'./client/build')

 app.use(express.static(staticpath))

 app.get('*',(req,res)=>{
    res.sendFile(staticpath2)
 })

 const port = process.env.PORT || 4000;
app.listen(port ,()=>{
   
})

