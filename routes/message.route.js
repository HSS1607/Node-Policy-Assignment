const router = require("express").Router();
const Message = require("../models/message");

router.post("/", async (req, res) => {
  const { message, day, time } = req.body;
  const runAt = new Date(`${day}T${time}`);

  await Message.create({ message, runAt });

  res.json({ message: "Scheduled" });
});

module.exports = router;
