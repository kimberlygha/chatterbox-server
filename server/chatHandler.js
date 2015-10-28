var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var objectId = 1;
// var messages = {
//   results: [{
//     objectId: objectId,
//     username: 'Jo',
//     text: 'HelloWorld',
//     roomname: 'Lobby'
//   }],
//   users: {
//     'Joe': true
//   },
//   rooms: {
//     'Lobby': true
//   }
// };


if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
  localStorage.setItem('results', [messages.results]);
}

router.use(bodyParser.text());

router.get('/messages', function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  response.send(JSON.stringify(getLocal('results')));

});

router.post('/messages', function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  saveLocal(JSON.parse(request.body));
  response.send(JSON.stringify(getLocal('results')));
});

router.get('/users', function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  response.send(JSON.stringify(messages.users));
});

router.get('/rooms', function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  response.send(JSON.stringify(messages.rooms));
});

var processData = function(data) {
  messages.users[data.username] = true;
  messages.rooms[data.roomname] = true;
  messages.results.push(data);
};

var saveLocal = function(data) {
  var tempResults = localStorage.getItem('results');
  tempResults.push(data);
  localStorage.setItem('results', tempResults);
};

var getLocal = function(storage) {
  return localStorage.getItem(storage)
}

module.exports = router;

// var requestHandler = function(request, response) {

//   console.log("Serving request type " + request.method + " for url " + request.url);

//   if(request.url !== '/classes/messages') {
//     response.writeHead(404, defaultCorsHeaders);
//     response.end();
//   }

//   var statusCode = 200;
//   var headers = defaultCorsHeaders;
//   headers['Content-Type'] = "text/plain";

//   if(request.method === 'GET') {
//     //respond with messages
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(messages));

//   } else if (request.method === 'POST') {
//     //add message into messages
//     request.on('data', function(res) {
//       // console.log('The request contained: ' + JSON.parse(res));
//       // messages.results.push(JSON.parse(res));
//       var parsedData = JSON.parse(res);
//       console.log('The request contained: ' + parsedData);
//       objectId++;
//       parsedData.objectId = objectId;
//       messages.results.push(parsedData);
//       console.log(messages.results);
//     });
//     request.on('end', function(){
//       console.log('end');
//       response.writeHead(201, headers)
//       response.end(JSON.stringify(messages));
//     });
//   }
// }
// return messages by json
// receive messages by json
// return user list
// return rooms list