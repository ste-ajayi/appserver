const express = require("express")
const router = express.Router()
const {protect} = require('../middlewares/authmiddlware')


router.post("/dashboard", protect,  async (req, res, next) => {
   
 })

 module.exports = router