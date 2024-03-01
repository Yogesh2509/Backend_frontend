const express = require("express")
const app = express()
const hbs = require("hbs")
require("./db/conn")
const Register = require("./models/registrationSchema")   
const path = require("path")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = process.env.Port || 8000;
const partialsPath = path.join(__dirname,"../template/partials")
const staticPath = path.join(__dirname,"../template/views")
app.use(express.static(staticPath))
app.set( "view engine", "hbs" )
app.set("views",staticPath)
hbs.registerPartials(partialsPath)
app.get("/", (req,res)=>{
    res.render("index");
})
app.get("/registration",(req,res)=>{
    res.render("registration");
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/registration",(req,res)=>{
   const data = new Register(req.body)
   data.save();
    res.send("registration successfull")
})
app.post("/login",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const name = req.body.fname;
    const userdetails = await Register.findOne({email:email});
    // console.log(userdetails)
    if(password == userdetails.password){
        res.send("home",{
            username : userdetails.name,
        })}
     else{
         res.send("Wrong Password")}
})
app.listen(port,()=>{
    console.log(`listening to port no ${port}`)
})