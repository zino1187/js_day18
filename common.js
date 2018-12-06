/*----------------------------------------------------
사용법: getRandom 호출시 당신이 원하는 수를 넣으세요
		ex) getRandom(5) 를 넣으면 0~4를 반환받습니다.
------------------------------------------------------*/
function getRandom(num){
	var r=Math.random();
	var n=parseInt(r*num);
	return n; //함수 중 return 에 값을 명시하여, 호출한 자가
	//그값을 반환받도록 처리하는 함수를 리턴값 있는 함수, 반환값이 있는
	//함수라 한다..
}

/*----------------------------------------------------
사용법: 2,7을 넘기면  2~~6까지 나온다
----------------------------------------------------*/
function getRandomByRange(min, max){
	return parseInt(Math.random()*(max-min))+min;
}
/*----------------------------------------------------
시간 문자열 처리 함수
호출자는 아래의 사항을 숙지하고 쓰세요...
인수로 넘긴 n 이 10보다 작으면, 앞에 "0" 문자를 조합해서
결과를  반환해 주자!!
----------------------------------------------------*/
function getTimeString(n){
	if(n<10){
		n="0"+n;
	}
	return n;
}


/*----------------------------------------------------
인수1 : 나 객체 
인수2 : 상대방 객체
----------------------------------------------------*/
function collisionCheck(me, target) {
	//나의 너비가 상대의 범위에 있는지 체크
	var horizon1=me.x+me.width >= target.x;  //좌측에서 우측으로 접근시
	var horizon2=me.x <= target.x+target.width; //우측에서 좌측으로 접근시
	//나의 높이가 상대의 범위에 있는지 체크
	var vertical1=(me.y+me.height >= target.y);  //위에서 아래로 접근시
	var vertical2=(me.y <= target.y+target.height); //아래에서 위로 접근시
	return (horizon1 && horizon2) && (vertical1 && vertical2);
}

/*----------------------------------------------------
원하는 달이 몇일까지 있는지 구하는 함수!!
ex)  유저가 알고 싶은 달이 2018년 5월일 겨우 
       getLastDateOfMonth(2018, 4);
----------------------------------------------------*/
function getLastDateOfMonth(year, month){
	var d = new Date();
	//조작하기
	d.setFullYear(year);
	d.setMonth(month+1);//자바스크립트에서는 마지막날을
	//구할 수 없기 때문에 정보를 다음달로 넘어간 후 0일을 구한다
	d.setDate(0);
	//함수 호출자에게 원하는 데이터를 반환 시켜준다!!
	return d.getDate();
}

/*----------------------------------------------------
해당 월의 시작 요일 구하기
ex) Date 객체를 5월로 세팅하고, 날짜는 1일로 세팅한다
	  요일을 물어본다...
	  주의)  호출시 5월이 궁금하다면 숫자는 4로 넘긴다!!
----------------------------------------------------*/
function getStartDayOfMonth(year, month){
	var d = new Date(); //현재 날짜이므로, 조작이 필요하다
	d.setFullYear(year);
	d.setMonth(month);
	d.setDate(1); //그 월의 시작일로 조작 1
	return d.getDay();
}



