const express=require('express');
const router=express.Router();
const User=require('../models/User')
const{body,validationResult}=require('express-validator');

const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config({path:'./config.env'});
const jwtSecret=process.env.SECRET_KEY;
router.post("/createuser",

body('email').isEmail(),
body('name').isLength({min:5}),
body('password','Incorrect Password').isLength({min:5}),

async(req,res)=>{

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }
  const salt=await bcrypt.genSalt(10);
  let secpassword=await bcrypt.hash(req.body.password,salt)

  try{
    await User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success:true});
  }
  catch(err)
  {  
  console.log(err);
  res.json({success:false}); 
  }
})



router.post("/loginuser",
body('email').isEmail(),
body('password','Incorrect Password').isLength({min:5}),

async(req,res)=>{

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }
  
 let email=req.body.email
  try{
    let userData=await User.findOne({email});
    if(!userData){
      return res.status(400).json({erros:"try loggin with correct credentials1"})
    }

    // const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
    // if(!pwdCompare){
    // return res.status(400).json({erros:"try loggin with correct credentials2"})
    if(req.body.password!==userData.password)
    {
    return res.status(400).json({erros:"try loggin with correct credentials2"})

  }
  const data={
    user:{
      id:userData.id
    }

  }
   const authToken=jwt.sign(data,jwtSecret) 
    return res.json({success:true,authToken:authToken})

  }
  catch(err)
  {    
  console.log(err);
  res.json({success:false}); 
  }
})


module.exports=router;

