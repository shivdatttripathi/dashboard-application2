const mongoose =require('mongoose');
const UserSchema =new mongoose.Schema({
    Show_name:{
        type:String,
       
    },
    Type:{
        type:String,
        
    },
   date:{
        type:String,
     
    },
    Adress:{
        type:String,
      
    },
    Url:{
        type:String,
      
    },


})

const Show = mongoose.model('show',UserSchema);
module.exports =Show;