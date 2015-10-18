var express = require('express');
var app = express();
var join = express.Router();

join.get('/:name/:secret', function(req, res){
  var name = req.params.name;
  var secret = req.params.secret;

  if(name.length > 3 && secret.length > 5) {
    res.send('joined')
  } else {
    res.sendStatus(404);
  }  
});

module.exports = join;
