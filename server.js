const express=require("express")
const app=express()

const PORT=80
app.get("/",(req,res)=>{
    return res.json({message:"Hello User"})
})
app.listen(PORT,()=>{
    console.log("Server running on the port " , PORT)
})