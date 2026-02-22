const express = require("express");
const connectDB = require("./config/db");

require("./services/cpuMonitor");
require("./services/scheduler");

const uploadRoute = require("./routes/upload.route");
const policyRoute = require("./routes/policy.route");
const messageRoute = require("./routes/message.route");

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Node Policy Assessment API Running ✅");
});

app.use("/upload", uploadRoute);
app.use("/policy", policyRoute);
app.use("/message", messageRoute);

app.listen(5000, () => console.log("Server running on 5000"));
