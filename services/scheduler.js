const cron = require("node-cron");
const Message = require("../models/message");

cron.schedule("* * * * *", async () => {
  const now = new Date();
  const messages = await Message.find({ runAt: { $lte: now } });

  for (const m of messages) {
    console.log("Message:", m.message);
    await m.deleteOne();
  }
});
