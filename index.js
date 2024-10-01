import express from 'express'

const app = express()
app.use("/",(req,res)=>{
    res.json({massage:"Hello From Express App"})
})

app.listen(3000,function(){
    console.log("Server Started")
})