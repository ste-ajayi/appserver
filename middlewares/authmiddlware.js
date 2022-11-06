const jwt = require('jsonwebtoken')
const User = require("../models/user")

const protect = async (req, res, next) => {
    let authtoken = req.headers['x-access-token']
     
//    console.log(authtoken)


    jwt.verify(authtoken, "privatekey", (err, decoded) => {
        if (err) {
            return res.status(401).send( "Unauthorized!" );
        }
        // res.send("authorized")
        req.user = decoded.id;
        next();
    });

    if (!authtoken) {
        console.log("no token");
    }

};




module.exports = { protect }