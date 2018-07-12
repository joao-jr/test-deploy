var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {

    res.send("Hello!!");
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
  console.log(__dirname);
});

