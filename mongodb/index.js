const express = require("express");

//init express app
const app = express();

// specify listen port
app.listen(9001, () => {
  console.log("✅ server started: port 9001");
});

// create books api endpoint
app.get("/books", (req, res) => {
  res.json({ mssg: "welcome to API endpoint" });
});
