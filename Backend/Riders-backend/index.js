const express=require("express")
const {connection}=require("./config/db")
const cors=require("cors")
require('dotenv').config()
const {passengerRouter}=require("./Routes/passenger.routes")
const { driverRouter } = require("./Routes/driver.routes")
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.setHeader("Content-Type","text/html")
    res.send(`<h1>Welcome</h1>`)
})
app.use("/passenger",passengerRouter)
app.use("/driver",driverRouter)
app.listen(8080,async()=>{
try{
    await connection
    console.log(`port ${process.env.PORT} is running`)
}catch(err){
    console.log(err.message)
}
})