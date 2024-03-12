const User = require("../models/user")

exports.addUser = async (req,res) => {
    try {

        const {name,email,phone} = req.body
        const response = await User.create({name,email,phone})
        res.status(200).json({
            success:true,
            data:response,
            message:'entry created success'
        })

        
    } catch (error) {
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}