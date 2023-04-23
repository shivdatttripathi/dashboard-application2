








const Show =require('../Model/showSchema')
const express = require("express");
const router =express.Router()


router.post('/register',async(req,res)=>{
   
    const {Show_name,Type,date,Adress,Url}  =await req.body;
 
 
   
    try {
        const show =new Show({Show_name,Type,date,Adress,Url})
        const showBook = await show.save();
        console.log(showBook);
        if (showBook) {
          res.json({ throw: "Data Created" }).status(201);
          console.log('good job');
        }
    } catch (error) {
        console.log(error);
    }

})


router.get('/getShow',async(req,res)=>{
    try {
    const show =await Show.find({});
    res.status(200).json(show);
    console.log('Data get Requst done',show);
    } catch (error) {
      console.log('error for get part',error);  
    }
 
})

router.get('/:id',async(req,res)=>{
   

     try {
        const show =await Show.findById(req.params.id);
       await res.status(200).json(show);
        console.log('Data get Requst done',show);
        } catch (error) {
          console.log('error to get for edit time',error);  
        }






     router.post('/:id',async(req,res)=>{
       const show = req.body;
     console.log(show)
     console.log(req.params.id);
       const EditShow =new Show(show);
       try {
         await Show.updateOne({_id:req.params.id},EditShow)
         res.status(204).json('update')
        
       } catch (error) {
        console.log('error for get part',error);  

       }
     })
})


router.delete('/:id',async(req,res)=>{
    try {
        console.log('id:',req.params.id);
      await Show.findByIdAndDelete({_id:req.params.id})
      res.status(204).json('update')
    } catch (error) {
        console.log('',error);
    }
})

module.exports = router;