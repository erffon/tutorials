const express = require("express");
const router = express.Router();

const Controller = require("../controllers/admin");

router.get("/about", Controller.getAbout);
router.get("/products", Controller.getProducts);
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.render("index.js");
});

router.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

module.exports = router;
