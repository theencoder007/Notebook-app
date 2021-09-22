const express =require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    obj:{
        name:"hello"
         res.json(obj);
      }
    console.log(req.body);
    res.send(req.body);
    
})


module.exports =router