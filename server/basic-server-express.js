var express = require('express');
var app = express();
var requestHandler = require('./requestHandler');
var bodyParser = require('body-parser');

var options = {
  port: 3000,
  ip: '127.0.0.1'
}

app.use(function(req, res, next) {
  bodyParser.json();
  bodyParser.urlencoded({
    extended:true
  });
  console.log('body-parser has run');
  next();
});

app.use('/', express.static('client'));

app.post('/classes/messages', requestHandler.requestHandler);

app.get('/classes/messages', requestHandler.requestHandler);

var server = app.listen(options.port, options.ip, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('server listening');
});

module.exports = app;