const express = require("express")
const app = express()
const hbs = require("hbs")
require("./db/conn")
const Register = require("./models/registrationSchema")   
const path = require("path")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = process.env.Port || 8000;
const staticPath = path.join(__dirname,"../template/views")
app.use(express.static(staticPath))
app.set( "view engine", "hbs" )
app.set("views",staticPath)
app.get("/",(req,res)=>{
    res.render("registration");
})
app.post("/",(req,res)=>{
   const data = new Register(req.body)
   data.save();
    res.send("registration successfull")
})
app.listen(port,()=>{
    console.log(`listening to port no ${port}`)
})