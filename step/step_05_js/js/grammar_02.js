//eventHandler.js

//event

var logo= document.getElementsByTagName('h1');
var pa = document.getElementsByTagName('p')[2];
	console.dir(pa);
	pa.style.color="#f00";

logo.style.color ='#0af' ;
pa.style.color ='#f0a';


logo.addEventListener('click',function(){
	body.style.backgroundColor = '#0af';
});

logo.addEventListener('click',bodyStyle());

function bodyStyle(){
	body.style.backgroundColor='#0af';
};