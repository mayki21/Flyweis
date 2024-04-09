const express=require("express")
// const userModel=require("../models/usermodel")
const userrouter=express.Router();

userrouter.get("/",(req,res)=>{
    res.send("hello")
})

module.exports=userrouter