// 템플릿
/*
	req:
		{"eventReq":{"accountSeq":1,"token":1000078 }}
	
	res:
		{"token": 1000078,"success": true}
*/


var method = 'POST';

var options = {
	"Mission" : false,
	"Token" : true,
	"Deprecated" : false
};

var produces = [
	"application/crypto+json", 
	"application/crypto+json+v2", 
	"application/crypto+json+v3", 
	"application/crypto+json+v4", 
	"application/crypto+json+v5", 
	"application/crypto+json+v6", 
	"application/crypto+json+v7", 
	"application/crypto+json+v8"	
];

exports = module.exports = function (req, res, next) {

    var param = req.body.logoutReq;
    
    if ( !preprocess(req, res, param, options, produces) )
    	return; 
    
    
	var output = { 
		token : param.token,
		success : true
	};
    
	async.waterfall([
        function (cb) {
            db(param, output, cb);
        }
/*		, function (cb) {    
			
        }
*/		
    ], function (err, result) {
	
		if ( err ) {			
			logger.warn("URI=" + req.originalUrl + " Msg="+ err);
		}
		
        makeResponse(req, res, output);
    });
}

module.exports.method = method;


function db(param, output, cb) {

	var query = "EXEC [CR_GAME].[dbo].[] @variable=" + "\'"+ param.accountSeq+ "\'";

	dto.getRecord(query, 0, function(status, result) {
		if ( false == status.success ) {
			cb("db return false", output);
			return;
		}

		if ( null == result ) {
			output.success = false;
			output.code = ErrorCode.SYSTEM_FAIL;
	  		cb("db result null", output);        
			return;
		}
		
		var record = eval(result[0]);
		
		// TODO : result...  
		/*
		output.success = true;
		
		output.resultCode = record.resultCode;
        output.resultMessage = record.resultMessage;
        */
        cb(null, output);        
	});	
}