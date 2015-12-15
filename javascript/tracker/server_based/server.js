var http = require('http');

// the templates 
var templates = require('./templates');

// Record Sessions
var sessions = {};

// Check to see if the session exists 
var doesSessionExist = function(uuid){
  return (typeof sessions[uuid] !== "undefined");
};

// Add the session to the collection if it doesn't already exist 
var addSession = function(uuid){
  if(!doesSessionExist(uuid)){
    // Add the session to the collection
    sessions[uuid] = uuid;
  }
};

http.createServer(function (request, response) {
  var uuid; 

  // We check for the Etag, see if they match and if they do, we return the ones passed in
  if(doesSessionExist(request.headers['if-none-match'])){
    uuid = request.headers['if-none-match']; 
  } else {
    uuid = Date.now();
  } 

  // Add a session to the collection 
  addSession(uuid);

  // Set some headers
  var HTMLheader = {
    'Content-Type': 'text/html',
    'ETag': uuid
  }; 

  // so we can ensure the uuid / Etag is the same across clearing the cookies and each request
  if(request.url === '/'){
    console.log(uuid);
  }
  
  // respond to the requests 
  response.writeHead(200, HTMLheader);
  response.end(templates.index());

}).listen(8124);

// Telling you how to access it 
console.log('Server running at http://127.0.0.1:8124/');
