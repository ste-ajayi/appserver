const express = require("express")
const router = express.Router()
const User = require('../models/user')
const { protect } = require('../middlewares/authmiddlware')


router.post("/send", protect, async (req, res) => {
    let user = req.user
    const receiver = req.body.receiver
    const theuser = await User.findById({ _id: user })
    const thereceiver = await User.findOne({email: receiver})
    const amount = req.body.amount
    const newbalance = theuser.balance - amount
    const receivernewbalance = thereceiver.balance + amount
   await User.findByIdAndUpdate(user,
        {
           balance: newbalance
        })
      await  User.findByIdAndUpdate( thereceiver._id,
            {
                balance: receivernewbalance
            }
        )
    res.status(200).json({
        accountreceiver: receivernewbalance,
        username: theuser.username,
        balance: newbalance ,
      
    })
})

module.exports = router