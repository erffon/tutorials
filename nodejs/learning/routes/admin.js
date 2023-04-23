const express = require("express");
const router = express.Router();

const aboutController = require("../controllers/admin");

router.get("/about", aboutController.getAbout);
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.render("index.js");
});

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
