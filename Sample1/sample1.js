var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'content-Type': 'text/plain'});
	res.end('keni echo ok\n');
}).listen(20080, '127.0.0.1');

console.log('keni Server Start');
