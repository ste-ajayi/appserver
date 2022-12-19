const express = require("express")
const router = express.Router()
const User = require('../models/user')
const {protect} = require('../middlewares/authmiddlware')


router.get("/dashboard", protect,  async (req, res) => {
    let user = req.user
	const theuser = await User.findById({_id: user})
    res.status(200).json({
		username: theuser.username,
        balance: theuser.balance
	 })
 })

 module.exports = router