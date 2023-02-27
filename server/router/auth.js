const express = require ('express');
const router=express.Router();
require('../db/conn');
const User = require('../model/userSchema');
//const {User}= require('../model/userSchema')

// router.post("/login", async(req,res)=>
// {
//    console.log(req.body);
// const {email,password} = req.body
//     try{
//         const user = new User({email,password})
//         await user.save();
//         //res.json({success:true});

//     }catch(err){console.log(err)
//         res.json({status:422,message:"false"});
//     }
// })

router.post("/signup", async(req,res)=>
{
   console.log(req.body);
const {name,email,password,cpassword} = req.body
    try{
        const user = new User({name,email,password,cpassword})
        await user.save();
        //res.json({success:true});

    }catch(err){console.log(err)
        res.json({status:422,message:"false"});
    }
})
module.exports = router;