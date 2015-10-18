var express = require('express');
var app = express();
var join = express.Router();
var fs = require('fs');

join.get('/:name/:secret', function(req, res){
  var name = req.params.name;
  var secret = req.params.secret;

  if(name.length > 3 && secret.length > 5) {
    if(addUser(name, secret)) {
      res.send('joined')
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(404);
  }  

  function addUser(name, secret) {
    var file = fs.readFileSync(__dirname + '/../users.json', 'utf8');
    var users = JSON.parse(file);

    if(users[name] === undefined) {
      users[name] = secret;       
      fs.writeFileSync(__dirname + '/../users.json', JSON.stringify(users))
      return true;
    } else {
      return false;
    }
  }
});

module.exports = join;
