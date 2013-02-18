/*
	req : Get
	http://127.0.0.1:20080/log/f?destination=ponggameLog&body={%22I_LogId%22:3,%22I_LogDetailId%22:1,%22I_ChannelUserId%22:%22111%22,%22I_PCSeq%22:%221%22,%22I_LogDes%22:{%22%20IviteChannelUserID%22:%20%22$CHANNEL_USER_ID%22},%20%22I_ConnectIP%22:%220%22}
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

	var shardKey = Math.floor(Math.random() * 1000) + currentTime.getTime();
	bodyData._shard = shardKey.toString();
	bodyData.I_LogDatetime = (currentTime.getTime().toString());
	bodyData.date = date.substr(0,10);
	bodyData.dateTime = date.substr(11, date.length);
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
