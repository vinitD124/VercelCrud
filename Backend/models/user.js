const mongoose = require("mongoose")


const  userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    phone:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("user",userSchema)