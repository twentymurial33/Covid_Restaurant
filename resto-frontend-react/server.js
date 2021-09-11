var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("moongose");
var app = express();

app.listen(PORT, function () {
  console.log("Express Server is up on port " + PORT);
});
