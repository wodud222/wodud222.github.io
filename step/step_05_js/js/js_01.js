console.log('abcdefg'.length);

var school = '그린컴퓨터 아트학원 수원점';
console.log('school',school.length)

console.log('school',school[5])

var sec1,sec2,sec3,sec4;

sec1="지도";
sec2="희망";
sec3="가계";
sec4="잠자리";
var result =sec1[1]+ sec2[1]+ sec3[0]+ sec4[1];
console.log(result);



// .toUpperCase : 대문자로 바꾸기
// .toLowerCase : 소문자로 바꾸기

var green= 'green Computer <ART> school sUWon placE!';

console.log('대문자',green.toUpperCase() );

console.log('소문자',green.toUpperCase() );

var sat, meeting,dinner,go;

sat=false;
meeting=false;
dinner=false;
go=!sat;

var coffee=['스타벅스','커피빈','커반','이디아','할리스','투썸']
// .push() : 뒤 추가
// .unshift() : 앞 추가
// .pop() : 뒤에 빼기
// .shift() : 앞에 빼기
// .concat(뒤배열) : 앞배열과 뒤배열을 합치기 
// .index0f('항목이름') : 원하는 항목이름의 위치(순서)를 찾아가는 방법
// .join() : 배열화 되어있는 형태를 문자로 나열하는 기능


console.log(coffee,length);
console.log(coffee[1])
console.log(coffee.push('이자카야'),coffee);
console.log(coffee.unshift('coffee'),coffee);
console.log(coffee.pop('coffee'),coffee);
console.log(coffee[1])

var drink= ['블랙티','공차','밀크티','태티차','보이차']
var brand= coffee.concat(drink);
console.log(brand);
// console.log(brand.slice(2,-4))


console.log(brand[3]); // 세번째가 뭔가여
document.write(brand.index0f('커반')+1);//배열형태에서 커반은 몇번째인가여 //일반 사용자를 고려하여 3번째로 표기
//실제 코드상은 2

console.log(brand.join('-'));/*개체 사이의 표기를 나타낼때*/

var obj ={'아메리카노':'쓰다','라떼':'달다'}
//console

console.log(obj.length);
console.log(obj.);

var eunjin ={'age':24,'sex':'female','hobby':'eatting,'character':'notBad'};
var ej={'hair':'brown','eye':'two';}
console.log(eunjin);

var body= document.body;
var bodyClass =body.className ='box' ;

console.log(bodyClass);

console.dir(document.body);

console.log(eunjin.concat(ej));