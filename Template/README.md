chachachasvr - chachacha server for node.js 
==========================================

다함게 차차차 서버! 

Structure 
-----------

	- 구조
	/chachachasvr.js	 (메인)
		main... router

	/config (설정)
		/db.js
		/config.js
	
	/doc (문서)
		/ ... 필요하다면
		
	/lib (자체 제작 모듈)
		/log - level
		/monitoring - cpu, memory ...
		/forever	
		/db - global.pool 

	/contensts (컨텐츠 구현)
		/...impl
	
	/logs (생성된 로그 파일들)
		/ ..log files 
	
	/tests (BDD) 
		/test-XXX.js
		
	/benchmarks (성능 검증)
		

	- mode :
		app.configure('production|development', function() {
		
	-


Install description
---------------------




