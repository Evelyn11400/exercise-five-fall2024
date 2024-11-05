const express = require("express");
const router = express.Router();

app.get("/", (req, res) => {
  res.send("SinglePost Route");
});

module.exports = router;
