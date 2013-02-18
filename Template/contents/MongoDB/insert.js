/*
	req : Get
	http://127.0.0.1:20080/MongoDB?{jsonKey:jsonValue}
*/

var mongodb = require('mongodb');
var method = 'GET';

exports = module.exports = function (req, res, next) {
    var param = req.query;
	
	var targetCollection = param.destination;
	var bodyData = JSON.parse(param.body);
	
	//console.log('targetCollection = ' + targetCollection);
	//console.log('bodyData = ' + bodyData);

	var currentTime = new Date()	
	var date = util.getTimeStamp(currentTime);

	//console.log(bodyData);

	var db = mongoDBPool.getPool();
	db.collection(targetCollection, function(err, collection) {      
		if( null == err ) {
			collection.insert(bodyData, function(err, r) {
				if( err != null ) {
					logger.warn(err + "Data : " + JSON.stringify(r));
				}
			});
		}
		else {
			logger.warn(err);
		}
	 });

	// 응답.
	res.writeHead(200, { "Content-Type": "application/json", "charset" : "UTF-8"  });	
	res.write('ok');
	res.end();
}

module.exports.method = method;
