const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/registeration").then(()=>{
    console.log("Connection Established with database")
}).catch((err)=>{
    console.log("no connection");
})