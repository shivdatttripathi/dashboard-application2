const mongoose = require('mongoose')
require("dotenv").config();
const DB2 ='mongodb+srv://ishwardatttripathi:piyush@cluster0.nnvj9ya.mongodb.net/?retryWrites=true&w=majority';


exports =mongoose
.connect(process.env.DATABASE, {
  useNewUrlParser: true,
})
.then(() => {
  console.log("DB CONNECTED");
});


