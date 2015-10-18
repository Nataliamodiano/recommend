var express = require('express');
var app = express();
var join = express.Router();

join.get('/:name/:password', function(req, res){
  if(req.params.name.length < 3) {
    res.sendStatus(404);
  } else {
    res.send('joined')
  }  
});

module.exports = join;
