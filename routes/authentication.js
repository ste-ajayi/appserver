const express = require("express")
const User = require('../models/user')
const jwt = require('jsonwebtoken');


const router = express.Router()



router.post("/register", async (req, res, next) => {
   try {
    const userExists = await User.findOne({email: req.body.email})
   if(userExists)  return  res.send('user already exists')

    const user = User.create(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
    )
    res.status(200).send(user)

   } catch (error) {
    res.status(400).send(error)
   }
})

router.post("/login", async (req, res, next) => {
  const {email, password} = req.body
  
  const user = await User.findOne({email})
  !user && res.send('User does not exist')
})

module.exports = router