const User = require("../models/user")


exports.updateUser = async (req,res)=>{
   
        try {
            
        const {id} = req.params

        const {name,email,phone} = req.body
            
        const deleteUser = await User.findByIdAndUpdate({
            _id:id,
        },{name,email,phone})



        res.status(200).json({
            success:true,
            data:deleteUser,
            message:"updated sucessfully"
        })


        } catch (error) {
            
            res.status(500).json({
                success:false,
                data:"internal server error",
                message:error.message
            })

        }

}