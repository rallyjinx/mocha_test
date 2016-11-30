const express = require('express');
const app = express();
const converter = require('./converter');

//routes
app.get("/rgbToHex", function(req, res) {
  const red = parseInt(req.query.red, 10);
  const green = parseInt(req.query.green, 10);
  const blue = parseInt(req.query.blue, 10);

  var hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));
});

app.listen(3000);
