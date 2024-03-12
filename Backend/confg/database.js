let mongoose = require("mongoose")
require("dotenv").config()

let dbConnect = async () =>{

    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("database connection successfully")
    }).catch(()=>{
        console.log("database not connected succesfully")
    })

}

module.exports = dbConnect