const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Account",
  new mongoose.Schema({
    name: String,
  }),
);
