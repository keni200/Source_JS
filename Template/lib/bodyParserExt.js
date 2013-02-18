// chachacha content-type 파서

function mime(req) {
  var str = req.headers['content-type'] || '';
  return str.split(';')[0];
}


exports = module.exports = function bodyParserExt(options) {
	options = options || {};
	return function bodyParser(req, res, next) {
		
		if ( req.body ) return next();
		req.body = {};

		if ( 'GET' == req.method || 'HEAD' == req.method ) return next();
		var parse = exports.parse[mime(req)];
		if ( parse ) {
			parse(req, options, next); 
		} else {			
//			application/json
//			logger.warn('Check content-type=', mime(req));
			next();
		}		
	}
}


var parseJsonExt = function(req, options, fn) {  
  var buf = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk){ buf += chunk });
  req.on('end', function(){
	try {
	
	  if ( 0 == buf.length ) {
	  	req.body = null;
	  	fn();
	  	return;
	  } 
	  
	  req.body = JSON.parse(buf, options.reviver);
//	  logger.debug('parseExt = ' + req.body);
	  fn();
	} catch (err){
	  fn(err);
	}
  });	
}

var parseCrypto = function(req, options, fn) {
	var buf = '';
	req.setEncoding('utf8');
	req.on('data', function(chunk){ buf += chunk });
	req.on('end', function(){
	try {
		// TODO : buf decrypt!		
		
		
	  	req.body = JSON.parse(buf, options.reviver);
		fn();
	} catch (err){
		fn(err);
	}
});		
}

exports.parse = {};

exports.parse['application/json'] = parseJsonExt;
exports.parse['application/json+v2'] = parseJsonExt;
exports.parse['application/json+v3'] = parseJsonExt;
exports.parse['application/json+v4'] = parseJsonExt;
exports.parse['application/json+v5'] = parseJsonExt;
exports.parse['application/json+v6'] = parseJsonExt;
exports.parse['application/json+v7'] = parseJsonExt;
exports.parse['application/json+v8'] = parseJsonExt;
exports.parse['application/json+v9'] = parseJsonExt;
exports.parse['application/json+v10'] = parseJsonExt;

exports.parse['application/crypto+json'] = parseCrypto;
exports.parse['application/crypto+json+v2'] = parseCrypto;
exports.parse['application/crypto+json+v3'] = parseCrypto;
exports.parse['application/crypto+json+v4'] = parseCrypto;
exports.parse['application/crypto+json+v5'] = parseCrypto;
exports.parse['application/crypto+json+v6'] = parseCrypto;
exports.parse['application/crypto+json+v7'] = parseCrypto;
exports.parse['application/crypto+json+v8'] = parseCrypto;
exports.parse['application/crypto+json+v9'] = parseCrypto;
exports.parse['application/crypto+json+v10'] = parseCrypto;

