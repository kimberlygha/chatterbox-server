/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var messages = {results: [{
  objectId: 1,
  username: 'Jo',
  text: 'HelloWorld',
  roomname: 'Lobby'
}]};
var objectId = 2;
var requestHandler = function(request, response) {

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
//     // console.log(request.body);
//     // })
//   }

  app.get('/classes/messages', function(req, res) {
    res.send(JSON.stringify(messages));
  });

  app.post('/classes/messages', function(req, res) {
    console.log(req.body);
  });

  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  // response.writeHead(statusCode, headers);

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  // response.write()
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  // response.end(JSON.stringify(testMessage));
};






// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

module.exports.requestHandler = requestHandler;