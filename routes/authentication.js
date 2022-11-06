const express = require("express")
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const { generateToken } = require("../controllers/userController");



const router = express.Router()



router.post("/register", async (req, res, next) => {
   try {
    const userExists = await User.findOne({email: req.body.email})
   if(userExists)  return  res.send('user already exists')

    const user = await User.create(
        {
            username: req.body.username,
            email: req.body.email,
            password:  await bcrypt.hash(req.body.password, 10)
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
  if(!user) return res.status(400).send('user does not exist')  

  const result =  bcrypt.compare(password, user.password);
  
  if(email === user.email && result) { 
    res.status(200).send(
      generateToken(user._id)
    )
   
           
   } else {
       res.status(400).send("Invalid login details")
   }

})

module.exports = router