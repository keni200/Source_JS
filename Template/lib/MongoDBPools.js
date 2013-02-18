//
// MongoDB Pool 
//

var mongodb = require('mongodb');

var selectPoolNum = 0;
var DBPools = function DBPools() {
	var pools_ = new Array();

	this.getPool = function() {		
		++selectPoolNum;
		
		if( config.db.server.length <= selectPoolNum ) {
			selectPoolNum = 0;
		}
		
		return pools_[selectPoolNum];
	}

	
	function init() {
		for ( var n = 0 ; n < config.db.server.length ; n++ ) 	{	
			var serv = new mongodb.Server(config.db.server[n].ip, config.db.server[n].port, { auto_reconnect: true, poolSize:50 });
			var conn_str = 'IP:' + 	config.db.server[n].ip + ' Port:' + config.db.server[n].port;
			logger.info("mongo DB connectionInfo : " + conn_str);
			
			var dbManager = new mongodb.Db(config.db.database, serv, {});
			
			dbManager.open(function (error, db) {
				pools_.push(db);
				
				if ( error ) { 
					logger.info("Mongo DB connection failed : " + error);
				}
				else {
					logger.info("Mongo DB connection success");
				}
			});
		}
	}

	function initReplicationSet() {
		var servers = new Array();

		for ( var n = 0 ; n < config.db.server.length ; n++ ) 	{	
			var serv = new mongodb.Server(config.db.server[n].ip, config.db.server[n].port, { auto_reconnect: true, poolSize:50 });
			var conn_str = 'IP:' + 	config.db.server[n].ip + ' Port:' + config.db.server[n].port;
			logger.info("mongo DB connectionInfo : " + conn_str);
			servers[n] = serv;
		}

		var replStat = new mongodb.ReplSetServers(servers, { connectArbiter:true});
		var dbManager = new mongodb.Db(config.db.database, replStat, {});

		dbManager.open(function (error, db) {
			pools_.push(db);
				
			if ( error ) { 
				logger.info("Mongo DB connection failed : " + error);
			}
			else {
				logger.info("Mongo DB connection success");
			}
		});
	}

	//init();
	return this;
}



module.exports = DBPools();
