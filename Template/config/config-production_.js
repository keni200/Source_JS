// set NODE_ENV=production

var config = module.exports = {};

// 서버 설정
config.server = [];
config.server.env = 'production';
config.server.port = 80;
config.server.secure_port = 443;

config.server.loglevel = 'info';
config.server.logfile = __dirname + '/../logs/app.log';	// 경로에 디렉토리가 존재하지 않으면 에러 발생!
 config.server.basedir = '/contents';	
 
 
// HTTPS 인증서
config.https = [];			
config.https.certification = 'certificate-production.pem';
config.https.private = 'privatekey-production.pem';
config.https.passphrase = 'Sptakqmf1234';

 // 암호화 키
config.crypto = [];
config.crypto.key = '2oGR5t0NCoewf2XEC85eyA==';
config.crypto.iv = 'keiGyA/DPwkpPjXKsgkAzg==';
			

// 카카오톡 인증 서버
config.kakao = [];
config.kakao.host = 'https://api.kakao.com';
config.kakao.uri = '/v1/token/check.json';


// DB Pool 
config.dbpool = [];
config.dbpool.connnection_min = 2;	
config.dbpool.connnection_max = 5;
config.dbpool.refresh_msec = 3000000;


// DB
config.db = [];
config.db.driver = 'SQL Server Native Client 11.0';	// MS-SQL 2012 (수정 금지)
config.db.user = 'cr_nme_service_app';
config.db.pwd = 'G37dnWodlfjsdlfdl';

config.db.server = [];

config.db.server[0] = [];
config.db.server[0].id = 'mssql-qa1';
config.db.server[0].host = '192.168.25.233';
config.db.server[0].port = '1433';
config.db.server[0].database = 'CR_GAME';
/*
config.db.server[1] = [];
config.db.server[1].id = 'mssql-2';
config.db.server[1].host = '222.122.135.196';
config.db.server[1].port = '61051';
config.db.server[1].database = 'CR_GAME';

config.db.server[2] = [];
config.db.server[2].id = 'mssql-3';
config.db.server[2].host = '222.122.135.196';
config.db.server[2].port = '61051';
config.db.server[2].database = 'CR_GAME';
*/

module.exports = config;