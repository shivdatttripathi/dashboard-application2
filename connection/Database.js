const mongoose = require('mongoose')


exports =mongoose
.connect(process.env.DATABASE, {
  useNewUrlParser: true,
})
.then(() => {
  console.log("DB CONNECTED");
});


