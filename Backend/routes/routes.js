const express = require("express")
const router = express.Router()


const {addUser} = require("../controllers/addUser")
const {getUser} = require("../controllers/getUser")
const {deleteUser} = require("../controllers/deleteUser")
const {updateUser} = require("../controllers/updateUser")





router.post("/addUser",addUser)
router.get("/getUser",getUser)
router.delete("/deleteUser/:id",deleteUser)
router.put("/updateUser/:id",updateUser)


module.exports = router