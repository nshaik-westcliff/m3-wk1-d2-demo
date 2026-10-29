var express = require('express');
var app = express();

//both exp_demo3a.js and exp_demo3b.js are in same directory
var routedemo = require('./exp_demo3a.js');
app.use('/routedemo', routedemo);

app.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});