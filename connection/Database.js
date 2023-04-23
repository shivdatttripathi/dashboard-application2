const mongoose = require('mongoose')
//require("dotenv").config(); for local server


exports =mongoose
.connect(process.env.DATABASE, {
  useNewUrlParser: true,
})
.then(() => {
  console.log("DB CONNECTED");
});


