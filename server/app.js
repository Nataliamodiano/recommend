var express = require('express');
var app = express();
var join = require('./routes/join.js')

app.use(express.static('server/public'));
app.use('/join/', join);

app.listen(1337);
