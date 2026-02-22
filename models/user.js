const mongoose = require("mongoose");

module.exports = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: String,
    dob: Date,
    address: String,
    phone: String,
    state: String,
    zip: String,
    email: String,
    gender: String,
    userType: String,
  }),
);
