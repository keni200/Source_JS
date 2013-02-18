var connect = require('connect');
var url = require('url');

mongodb = require('mongodb');

/*
var serverOptions = {
  'auto_reconnect': true,
  'poolSize': 10,
  'safe' : true
};
*/

var serv = new mongodb.Server('localhost', 27017, {auto_reconnect:true, poolSize:10, safe:true});
var dbManager = new mongodb.Db('test', serv);

dbManager.open(function (error, db) {
	if ( error ) { 
		console.log("Mongo DB connection failed.");
	}
	
	// Web
	connect.createServer(connect.router(function (app) {
		
		// 1. Emergency
		//  http://127.0.0.1:8210/check
		app.get('/check', function(req, res, next) {		
			emergency(db, req, res);
		});
			
		// 2. Notice
		app.get('/notice', function(req, res, next)	{		
			var query = url.parse(req.url, true).query;				
			res.writeHead(200, {'Content-Type' : 'text/html' });		
			res.end();
		}); 
		
		// 3. SignIn
		app.get('/user/auth/login', function(req, res, next)	{		
			signin(db, req, res);				
		}); 
		
	})).listen(8210, function() {
		console.log('GameServer running at http://127.0.0.1:8210');
});

 db.close();
});
// http://127.0.0.1:8210/check


var emergency = function(db, req, res) {
	var query = url.parse(req.url, true).query;		
			
	res.writeHead(200, {'Content-Type' : 'text/json' });	
	
	var collection = db.collection('notice');
  	collection .find().toArray(function(err, items) {
  		// TODO : export body data and transform JSON
		res.end(JSON.stringify(items)); 
	});	
}


var signin = function(db, req, res) {
	var query = url.parse(req.url, true).query;		
			
	res.writeHead(200, {'Content-Type' : 'text/json' });	
	
	var collection = db.collection('user');
  	collection.find().toArray(function(err, items) {
  		// TODO : read SP! and porting (AES)		
		res.end(JSON.stringify(items)); 
	});	
	
}

