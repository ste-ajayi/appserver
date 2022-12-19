const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: {type: String, required: true},
    password: { type: String, required: true, min: 6 },
    pin: { type: String},
    balance: { type: Number, default: 100},
    date: { type: Date, default: Date.now}
  }
);

module.exports = mongoose.model('User', userSchema);``