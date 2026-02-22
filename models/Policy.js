const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Policy",
  new mongoose.Schema({
    policy_number: String,
    start_date: Date,
    end_date: Date,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "LOB" },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Carrier" },
  }),
);
