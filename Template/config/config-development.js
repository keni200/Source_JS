var config = module.exports = {};

// 서버 설정
config.server = [];
config.server.env = 'development';
config.server.port = 20080;
config.server.secure_port = 48443;

config.server.loglevel = 'silly';
config.server.logfile = __dirname + '/../logs/app.log';	// 경로에 디렉토리가 존재하지 않으면 에러 발생!
config.server.basedir = '/contents';	

// DB 설정
config.db = [];
config.db.server = [];
config.db.database = 'GameLog';

/*
config.db.server[0] = [];
config.db.server[0].ip = '112.175.175.243';
config.db.server[0].port = 27017;
*/

config.db.server[0] = [];
config.db.server[0].ip = '222.122.169.120';
config.db.server[0].port = 27017;

/*
config.db.server[1] = [];
config.db.server[1].ip = '112.175.175.61';
config.db.server[1].port = 27017;

config.db.server[2] = [];
config.db.server[2].ip = '112.175.175.62';
config.db.server[2].port = 27017;

config.db.server[3] = [];
config.db.server[3].ip = '112.175.175.59';
config.db.server[3].port = 37017;
*/
module.exports = config;