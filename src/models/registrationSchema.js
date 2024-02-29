const mongoose =require("mongoose")
const registrationSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type: String, 
        requried: true ,
    },
    password : {
        type:String,
        required:true,
    }

})
const registraton = new mongoose.model("Register",registrationSchema)
module.exports=registraton;