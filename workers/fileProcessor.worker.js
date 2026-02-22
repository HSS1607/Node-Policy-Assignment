const { parentPort, workerData } = require("worker_threads");
const mongoose = require("mongoose");
const XLSX = require("xlsx");

const Agent = require("../models/Agent");
const User = require("../models/user");
const Account = require("../models/Account");
const LOB = require("../models/LOB");
const Carrier = require("../models/Carrier");
const Policy = require("../models/Policy");

(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/policyDB");

  const workbook = XLSX.readFile(workerData.filePath);
  const data = XLSX.utils.sheet_to_json(
    workbook.Sheets[workbook.SheetNames[0]],
  );

  for (const row of data) {
    const agent = await Agent.findOneAndUpdate(
      { name: row.agent },
      { name: row.agent },
      { upsert: true, new: true },
    );

    const user = await User.findOneAndUpdate(
      { email: row.email },
      {
        firstname: row.firstname,
        dob: row.dob,
        address: row.address,
        phone: row.phone,
        state: row.state,
        zip: row.zip,
        email: row.email,
        gender: row.gender,
        userType: row.userType,
      },
      { upsert: true, new: true },
    );

    const account = await Account.findOneAndUpdate(
      { name: row.account_name },
      { name: row.account_name },
      { upsert: true, new: true },
    );

    const lob = await LOB.findOneAndUpdate(
      { category_name: row.category_name },
      { category_name: row.category_name },
      { upsert: true, new: true },
    );

    const carrier = await Carrier.findOneAndUpdate(
      { company_name: row.company_name },
      { company_name: row.company_name },
      { upsert: true, new: true },
    );

    await Policy.create({
      policy_number: row.policy_number,
      start_date: row.policy_start_date,
      end_date: row.policy_end_date,
      user: user._id,
      category: lob._id,
      company: carrier._id,
    });
  }

  parentPort.postMessage("Upload completed");
})();
