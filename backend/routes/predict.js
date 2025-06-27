const express = require("express");
const { PythonShell } = require("python-shell");
const router = express.Router();

router.post("/predict", (req, res) => {
  const inputText = req.body.text;

  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: "../",
    args: [inputText],
  };

  PythonShell.run("predict.py", options, (err, results) => {
    if (err) {
      console.error("Python error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (!results || results.length === 0) {
      return res.status(500).json({ error: "No output from Python script" });
    }

    res.json({ prediction: results[0] }); // 'real' or 'fake'
  });
});

module.exports = router;
