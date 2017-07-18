var express = require('express');
var app = express();

app.get('/:time', function(req, res){
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var checkNatural = (new Date(req.params.time)).getTime()/1000;
    var unix = null, natural = null;
    
    //case unix time
     if(!isNaN(req.params.time)){
        unix = req.params.time;
        var t = new Date(unix * 1000);
        var m = months[t.getMonth()];
        natural = m + " " + t.getDate() + ", " + t.getFullYear();
    //case natural time
     }else if(checkNatural){
         natural = new Date(req.params.time).toDateString();
         unix = checkNatural;
     }

   res.json({
       "unix": unix,
       "natural": natural
   });
});

module.exports = app;