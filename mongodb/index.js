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
  let booksArray = [];
  db.collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((item) => booksArray.push(item))
    .then(() => {
      res.status(200).json(booksArray);
    })
    .catch((err) => res.status(500).json({ error: "could not fetch data" }));
  // we can not send multiple responses via a single request
  //   res.json({ mssg: "welcome to API endpoint " });
});
