var express = require("express");
var app = express();

var monent = require("moment");
var date = monent().format("YYYY-MM-DD, h:mm:ss a");
console.log("today is ", date);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
