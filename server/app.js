var express = require('express');
var app = express();
var join = require('./routes/join.js')

app.use(express.static('server/public'));
app.use('/join/', join);

app.get('/data', function(req, res) {
  var movieData = {data: [
    'Harry Potter',
    'Ted'
  ]}
  res.send(movieData);
})

app.listen(1337);
