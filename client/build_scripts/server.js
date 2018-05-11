// Boots Compiled Webpack Build on Production Server

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, function(error) {
  if (error) {
    console.log(error);
  }
});

app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", function(req, res) {
  res.sendfile("index.html", { root: path.join(__dirname, "../build") });
});
