const router = require("express").Router();
const User = require("../models/user");
const Policy = require("../models/Policy");

router.get("/search/:username", async (req, res) => {
  const user = await User.findOne({ firstname: req.params.username });
  if (!user) return res.json([]);

  const policies = await Policy.find({ user: user._id })
    .populate("company")
    .populate("category");

  res.json(policies);
});

router.get("/aggregate", async (req, res) => {
  const data = await Policy.aggregate([
    {
      $group: {
        _id: "$user",
        totalPolicies: { $sum: 1 },
      },
    },
  ]);

  res.json(data);
});

module.exports = router;
