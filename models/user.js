const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    pin: { type: String},
    password: { type: String, required: true, min: 6 },
    balance: { type: Number, default: 0},
    date: { type: Date, default: Date.now}
  }
);

module.exports = mongoose.model('User', userSchema);