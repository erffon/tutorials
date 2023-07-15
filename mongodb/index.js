const express = require("express");
const { connectToDb, getDb } = require("./db");

//init express app
const app = express();

let db;
connectToDb((err) => {
  if (!err) {
    // specify listen port
    app.listen(9001, () => {
      console.log("✅ server started: port 9001");
    });
    db = getDb();
  }
});

// create books api endpoint
app.get("/books", (req, res) => {
  res.json({ mssg: "welcome to API endpoint" });
});
