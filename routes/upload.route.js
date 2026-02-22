const router = require("express").Router();
const multer = require("multer");
const { Worker } = require("worker_threads");
const path = require("path");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  const worker = new Worker(
    path.join(__dirname, "../workers/fileProcessor.worker.js"),
    { workerData: { filePath: req.file.path } },
  );

  worker.on("message", (msg) => res.json({ message: msg }));
  worker.on("error", (err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
