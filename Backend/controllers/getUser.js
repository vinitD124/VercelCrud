const User = require("../models/user")

exports.getUser = async (req,res) => {
    try {

        const response = await User.find({})
        res.status(200).json({
            success:true,
            data:response,
            message:'all data get'
        })

        
    } catch (error) {
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            data:"internal server error while fetching all data",
            message:err.message
        })
    }
}