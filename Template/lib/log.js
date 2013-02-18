exports = module.exports = function() {}

var winston = require('winston');

/*
 * alloc logger
 * add.console
 * add.file
 * add.couchdb
 *
 */

/*
var logger = new (winston.Logger);

logger.add(winston.transports.Console, {
	level:"silly", 
	colorize: true, 
	timestamp: true
});

logger.add(winston.transports.File, {
//	filename : config.server.logfile
	filename : __dirname + '/apptest.log' 
});

logger.add(winston.transports.Couchdb, {
	host:'127.0.0.1', 
	port:8091,
	db : 'default',
	user: 'Administrator',
	pass : 'asdf1234',
	ssl : false
});
*/

global.logger = new (winston.Logger) ({
	transports: [
		new (winston.transports.Console)({
			// TODO : leveld은 config에서 읽도록!
			level:config.server.loglevel, colorize: true, timestamp: true
		}),
 		new (winston.transports.File)({
			filename : config.server.logfile
		})
/*,
		new (winston.transports.Couchdb)({
			host:'127.0.0.1', 
			port:8091,
			db : 'default',
			user: 'Administrator',
			pass : 'asdf1234',
			ssl : false
		})
*/		
		]
})


/* 검증된 코드

global.logger = new (winston.Logger) ({
	transports: [
		new (winston.transports.Console)({
			level:"silly", colorize: true, timestamp: true
		}),
 		new (winston.transports.File)({
			filename : config.server.logfile
		})
		]
});

*/


// 다음 순서대로 로그레벨이 설정됨 (debug가 최상위 바로 아래있음에 유의)
/*
logger.silly('level 1');
logger.verbose('level 2');
logger.info('level 3');
logger.warn('level 4');
logger.debug('level 5');
logger.error('level 6');
*/
