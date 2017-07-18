var express = require('express');
var app = express();

app.get('/:time', function(req, res){
      res.send('hello');
});

module.exports = app;