// // 조건문

// // if문 : 어떠한 조건을 주고,  조건에 부합되면 작동되게 만드는 기능
// // step_01

//    // if(조건 형태){
//    // 	참이면 현재 위치 가실행
//    // }

// // // step_02

// // 	if(조건 형태){
// // 		조건이 참이면 현재 위치 실행
// // 	} else{조건이 거짓이면 현재 위치 실행}

// // var num = 10;

// // if(num > 11){
// // 	console.log('변수 num은 11보다 큽니다.');
// // } else{
// // 	console.log('변수 num은 11보다 작거나 같습니다.')
// // }

// var subject = 'mathMathics' ;

// var subLength = subject.length;

// if(subLength<2){console.log('작은수');
// } else if(subLength <= 5){
// 	console.log('5글자보다 작거나 같은수');
// } else if(subLength <= 10){
// 	console.log('10글자보다 작거나 같은수');
// } else {
// 	console.log('10글자보다 많은 수');
// }
// console.log('subLength의 실제 글자 수',subLength);

// //삼항연산자 

// (조건) ? 참이면 실행 : 거짓이면 실행


// var numberN= 20('원하는 숫자를 입력하세요!');
// switch(numberN % 4){
// 	case 1:
// 	console.log('numberN을 4로 나누면 1이 남는다');
// 	break;
// 	case 2:
// 	console.log('numberN을 4로 나누면 2가 남는다');
// 	break;
// 	case 3:
// 	console.log('numberN을 4로 나누면 3이 남는다');
// 	break;
// default:
// 	console.log('남는것이 없다 !!!');
// }

// $('선택자').on('이벤트')
// 이벤트: 클릭, 드래그 , 키보드누름, 휠이동, 마우스를 띄는것,더블클릭,링크이동

//example ) click,dblclick,wheel,mouseenter,mouseleave,scroll
//on이라 하는 함수를 실행 'click' => 이벤트를 말함


//버튼을 클릭하면, .view를 사라지게 해라 !
$(function(){

$('button').on('click',function(){
	$('.view').css({'backgroundColor':'#fa8'});
});

});

//무엇을 선택