const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const PORT = 6000;
const URL = "https://www.theguardian.com/international";

axios(URL).then((response) => {
  const html = response.data;
  console.log(html);
});

const app = express();
app.listen(PORT, () => {
  console.log("server is running");
});
