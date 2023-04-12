const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utility/rootDir");

router.get("/about", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "about.html"));
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

module.exports = router;
