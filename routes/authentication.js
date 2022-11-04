const express = require("express")
const User = require('../models/user')
const jwt = require('jsonwebtoken');


const router = express.Router()



router.post("/register", async (req, res, next) => {
  res.send('register')
})

router.post("/login", async (req, res, next) => {
  res.send('login')
})

module.exports = router