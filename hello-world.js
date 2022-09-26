
var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
  fs.readFile('welcome.txt', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(data);
    return response.end();
  });
  
}).listen(3000);

 console.log('Server running at http://127.0.0.1:3000/');
