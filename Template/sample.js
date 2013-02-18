var http = require("http");

console.log('hello world');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('ok');

	
}).listen(20080);


