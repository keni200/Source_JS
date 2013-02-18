/*
	Q. how to run?
	A. 
		set NODE_ENV=production
		node chachacha.js

*/
/////////////////////////////////////////////////////////////////////////
// external module
async = require('async');
var cluster = require('cluster');
ServerReleaseOption = 'production';

if ( cluster.isMaster ) { 
	console.log('NODE_ENV=' + ServerReleaseOption);
}
	 
var numCPUs = 1;

if( ServerReleaseOption == 'production' ) { 
	numCPUs = require('os').cpus().length; 
}



/////////////////////////////////////////////////////////////////////////
// global module

if( ServerReleaseOption == 'production' ) {
	config = require('./config/config-production.js');
} else {
	config = require('./config/config-development.js');
}

require('./lib/log.js');
var fs = require('fs');
	

/////////////////////////////////////////////////////////////////////////
// cluster 
if ( cluster.isMaster ) 
{    
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();   
	}    
	
	cluster.on('death', function(worker) 	{ 		
		logger.info('worker ' + worker.pid + ' died & restart');
		cluster.fork();	                   
	});
}
else 
{
	var express = require('express');
	var bodyParserExt = require('./lib/bodyParserExt.js');	
	makeResponse = require('./lib/makeResponse.js');
	ErrorCode = require('./config/errorcode.js').ErrorCode;
	mongoDBPool = require('./lib/dbpools.js');
	util = require('./lib/util.js');

	init_http();
}


// HTTP server
function init_http() {
	var http = require('http');

	var app = express();
	var route = require('./route.js').route;
		
//	app.use(express.bodyParser());	// POST 방식일때 body 없으면 에러 발생해서 제거!
	app.use(bodyParserExt());
	
	init_route_from_dir('HTTP', app); 
	
	process.on('starthttp', function() {
		http.createServer(app).listen(config.server.port, function () {
		    logger.info("HTTP running at http://127.0.0.1:"
				   	+ config.server.port + " Mode:" + config.server.env);
		});
	});
}

// route table
function init_route(app_name, app, route) {
	Object.keys(route).forEach ( function(key) {
		var val = route[key];
		
		var method = val[0].toLowerCase(),
			uri = val[1],
			routeFunc = require(__dirname + '/contents/' + val[1] + '.js');
		
		logger.info(app_name + '.' + val[0] + ' URI=' + uri);
		app[method](uri, routeFunc);
	});
}

// 디렉토리 리스트를 토대로 URI 추출하여 app에 method 등록 
function init_route_from_dir(app_name, app) { 
	var path = require('path');	
	var walk = require('walk');
	var files = [];
	var S = require('string');	
	
	var walker  = walk.walk(__dirname + config.server.basedir, { followLinks: false });
	
	walker.on('file', function(root, stat, next) {
		
		var pos = root.indexOf(config.server.basedir);
		var isScript = S(stat.name).right(2).endsWith('js');	// only .js file	
	
		if ( false == isScript ) 	 
		{	
			next();
			return;
		}
	
		var rel_path = root.substr(pos +config.server.basedir.length, root.length - pos - config.server.basedir.length) + '/';		
		var uri = rel_path + S(stat.name).left(stat.name.length - 3); // .js 제거
//		logger.debug('URI=' + uri);
	
		var func =  require(root + '/' + stat.name);	
//		logger.debug(root + '/' + stat.name);
		var method = func.method.toLowerCase(),		
			 routeFunc = func;

		logger.verbose(func.method + ' URI=' + uri);
		app[method](uri, routeFunc);

	    next();
	});
	
	walker.on('end', function() {
//	    console.log(files);	
		process.emit('starthttp');
	});
}
