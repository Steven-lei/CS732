var express = require("express");
var app = express();

var monent = require("moment");

app.get("/", function (req, res) {
  var date = monent().format("YYYY-MM-DD, h:mm:ss a");
  res.send("Today is " + date);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
