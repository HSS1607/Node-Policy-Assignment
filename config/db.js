const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/policyDB");
  console.log("MongoDB connected");
};
