// 결과 보낼때 

exports = module.exports = function makeResponse(req, res, output) {
//	res.writeHead(200, { "Content-Type": "application/json" });
	res.writeHead(200, { "Content-Type": "application/json", "charset" : "UTF-8"  });	
	res.write(JSON.stringify(output));
	res.end();
}