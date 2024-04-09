const express=require("express")
require("dotenv").config()
const connection=require("./connection/db");
const userRoute=require("./route/userRoute")
const app=express()
app.use(express.json())

app.use("/user",userRoute)



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to DATABASE");
    } catch (error) {
        console.log(error);
        
        
    }
    console.log(`server is running on port ${process.env.port}`);
})