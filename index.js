const express = require('express')
const app = express()
const port = process.env.PORT || 1200
const cors = require('cors')
const authenticationRoute = require("./routes/authentication")
const mongoose = require('mongoose');

const uri = 'mongodb+srv://amirize:Golda909@cluster0.iy2mxwp.mongodb.net/?retryWrites=true&w=majority'

//database  connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("connected successfully"); });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//MIDDLEWARES
app.use(cors())
app.use(function (req, res, next) {
    req.header("Content-Type: application/x-www-form-urlencoded");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET, POST, OPTIONS, PUT, PATCH, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
})

app.get('/test', (req, res) => {
    res.send('this is a test')
})

//ROUTES
app.use('/auth', authenticationRoute)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})