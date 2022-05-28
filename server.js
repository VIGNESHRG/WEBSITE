var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var name = querystring.parse(data1)["username"];
console.log(name);
var email = querystring.parse(data1)["email"];
console.log(email);

if (request.url === '/login') {
module.authenticateUser(name, email, response);
            } 
else if (request.url === '/save') {
module.saveUser(name, email, response);
            } 
      });
    
}).listen(3000);
console.log("Server started");
