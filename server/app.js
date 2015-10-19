var express = require('express');
var app = express();
var join = require('./routes/join.js')

app.use('/join/', join);
app.use(express.static('public'));

app.listen(1337);
