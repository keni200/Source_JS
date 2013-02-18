// 기능 설명 
// ['방식', '주소'];
//
// ex)
// 1. GET 방식 처리 예제		
//  ['GET', '/echo'] // , '/contents/echo.js'
// 2. GET, POS 모두 지원 처리
//  ['ALL', '/echo'']

// HTTP ( http는 route 사용 안함!!!! )
var route = [
	
	// Echo 테스트 (HTTP용)
	['GET', '/echo'], // , '/contents/echo.js'
	['GET', '/monitoring/profile'],

	['POST', '/user/auth/logout'],
	
	 		
];

// HTTPS
var secure_route = [
	
	// Echo 테스트 (HTTPS용)
	['ALL', '/echo'],
	
	// 사용자 로그인 하기
	['POST', '/user/auth/login'],
	
];

exports.route = route;
exports.secure_route = secure_route;

