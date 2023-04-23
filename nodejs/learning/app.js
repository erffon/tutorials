const express = require("express");
const adminRoute = require("./routes/admin");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./utility/rootDir");

// create server
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(adminRoute);
app.use((req, res) => {
  res.status(404).render("404", { title: "404 page" });
});
app.listen(9000);
