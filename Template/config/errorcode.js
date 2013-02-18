/*
// 에러코드 테스트 
var errorcode = {};

errorcode[0] = "success";	// 성공
errorcode[1] = "failed";		// 실패
errorcode[2] = "Not impl";	// 미구현
errorcode[3] = "Wrong Parameter";	// 잘못된 인자
errorcode[4] = 'DB connection' ; 	
errorcode[5] = 'DB query' ; 

module.exports.errorcode = errorcode;
*/

// 서비스용 에러 코드
// usage) 	console.log(ErrorCode.AUTH_KAKAO_TOKEN_CHECK_FAIL);
var ErrorCode = {
	"AUTH_KAKAO_TOKEN_CHECK_FAIL" : "SVC_1000",
	"AUTH_ACCOUNT_BLOCKED" : "SVC_1001", // 블럭된 사용자	
	"AUTH_ACCOUNT_WITHDRAWAL" : "SVC_1002", // 탈퇴한 회원
	"AUTH_ACCOUNT_NOT_REGISTERED" : "SVC_1003", // 미가입 회원
	"BILLING_SIGNEDDATA_EMPTY" : "SVC_2000",
	"BILLING_SIGN_CHECK_FAIL" : "SVC_2001",
	"BILLING_NOT_PURCHASED" : "SVC_2002",
	"ACCOUNT_NOT_FOUND" : "SVC_3000", // 존재하지 않는 사용자
	"CAR_NOT_EXIST" : "SVC_3001", //존재하지 않는 차량일련번호
	"CAR_ALREADY_MAX_CLASS" : "SVC_3002", //이미 최대 CLASS 임
	"CAR_NEED_TROPHY" : "SVC_3003", //보유 트로피 개수 부족
	"CAR_NOT_MAX_UPGRADE" : "SVC_3004", //해당 보유 자동차 최대 업그레이드가 되지 않은 상태
	"CAR_NEED_GOLD" : "SVC_3005", //골드 부족
	"CAR_ALREADY_MAX_UPGARADE_COMPLETE" : "SVC_3006", //최대 튜닝 완료된 상태
	"CAR_NOT_EXIST_TUNE_NUMBER" : "SVC_3007", //존재하지 않는 튜닝 부위 번호
	"CAR_NO_DATA_TUNE_INFO" : "SVC_3008", //차량 튜닝 정보 없음
	"PRESENT_ALREADY_ACCEPT" : "SVC_4000", //이미 수락한 선물
	"PRESENT_ALREADY_SEND_TODAY" : "SVC_4001", //이미 선물을 보냄
	"PRESENT_DENIED" : "SVC_4002", // 선물 수락 거부상태
	"EXCHANGE_NO_NOT_EXISTS" : "SVC_4003", // 존재하지 않는 교환번호
	"EVENT_REVIEW_ALREADY_RECEIVED" : "SVC_4004", // 이미 이벤트 보상을 받음
	"BUY_NOT_EXIST_ITEM" : "SVC_5001", //존재하지 않는 아이템
	"BUY_NEED_GOLD" : "SVC_5002", //골드 부족
	"BUY_NOT_EXIST_CAR" : "SVC_5011", //존재하지 않는 자동차 번호
	"BUY_ALREADY_HAVE_CAR" : "SVC_5012", //해당계정에 자동차 존재함
	"BUY_NOT_CLASS" : "SVC_5013", //해당 자동차을 구매할 조건이 되지 않음
	"BUY_NOT_EXIST_DRIVER" : "SVC_5014", //존재하지 않는 드라이버 번호
	"BUY_NEED_TROPHY" : "SVC_5015", //보유 트로피 개수 부족
	"BUY_ALREADY_HAVE_DRIVER" : "SVC_5016", //해당계정에 드라이버 존재함
	"BUY_OVER_ITEM_MAX_COUNT" : "SVC_5017", //현재 해당 아이템 보유개수 최대임
	"BUY_ALREADY_GET_RANDOMBOX" : "SVC_5018", //현재 공구상자 랜덤아이템 보유 중임
	"BUY_NOT_EXIST_MISSION_NO" : "SVC_5019", //존재하지 않는 미션 번호
	"BUY_AREADY_MISSION_COMPLETE" : "SVC_5020", //이미완료한 미션번호
	"GAME_START_TIRE_REQUIRED" : "SVC_6000", // 게임시작시 타이어부족
	"USE_ITEM_DOES_NOT_EXISTS" : "SVC_6001", // 아이템 수량부족
	"REQUEST_NOT_CORRECT" : "SVC_6002", // 아이템 수량부족
	"DRIVER_NOT_HAVE" : "SVC_7000", // 해당 드라이버 보유하지 않음
	"TIRE_EXCEED" : "SVC_8000", //타이어 지급 초과
	"TIRE_LACK_TIME" : "SVC_8001", //타이어 지급 시간 미도달
	"TIRE_LIMIT_EXCEED" : "SVC_8003", //타이어 보유한도" : 999개 초과
	"FRIEND_ALREADY_INVATED" : "SVC_8005", //이미초대한 친구
	"SYSTEM_FAIL" : "SVC_9000", //시스템 실패
	"SYSTEM_MAINTENANCE" : "SVC_9001", // 시스템 점검
	"API_DEPRECATED" : "SVC_9002" // 연동 API가 deprecated됨	
}


module.exports.ErrorCode = ErrorCode;


/*
// 서버 설정
config.server = [];

{
	"0"	: "unknown failed"
	"1" : "success"
	
	// HTTP spec : response code	
	"200" : "ok",
	"201" : "Created",

	"400" : "Bad Request",
	"401" : "Unauthorized",
	"403" : "Forbidden",

	"500": "Internal Server Error",
	"505": "not valid authorization"
	
	// internal error code!
	
	// TODO....   	
}
*/