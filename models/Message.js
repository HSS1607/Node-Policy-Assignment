const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Message",
  new mongoose.Schema({
    message: String,
    runAt: Date,
  }),
);
