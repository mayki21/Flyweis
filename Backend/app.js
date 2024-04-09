const express=require("express")
require("dotenv").config()
const connection=require("./connection/db");
const app=express()
app.use(express.json())



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to DATABASE");
    } catch (error) {
        console.log(error);
        
        
    }
    console.log(`server is running on port ${process.env.port}`);
})