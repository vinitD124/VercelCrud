const User = require("../models/user")

exports.deleteUser = async(req,res)=>{

    try {

        let {id} = req.params

        const deletedUser = await User.findByIdAndDelete({_id:id})
        
        res.status(200).json({
            sucess:true,
            data:deletedUser,
            message:"User deleted succesfully"
        })
    } catch (error) {
         
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }

}

