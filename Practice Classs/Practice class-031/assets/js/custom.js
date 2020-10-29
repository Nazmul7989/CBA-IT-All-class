/*
console.log('New class');

//for loop
let mobile = ['Apple','Samsung','Walton','Symphony','Tcno','Apple','Samsung','Symphony','Tcno'];
for (let i=0; i<mobile.length; i++){
    console.log(mobile[i]);
}

//While loop
console.log('mobile list:');
let i=0;
while(i<mobile.length){
    console.log(mobile[i]);
    i++
}


//do while loop
let j=0;
do{
  console.log(j);
  //  j++;
    j=j+1
} while(j<20)
    
  //if , else and else if   
let name = 'sobuj' ;

if(name=='sobuj'){
    console.log('Hello Vai');
}
else{
    console.log('get out');
}

let balance = 500;

let wihdraw = 300;

if (wihdraw>balance){
    console.log('balance is insufficient');
}
else{
    console.log('welcome');
}



let mobileCheck = 'I am Walton';

if(mobileCheck=='I am Walton'){
    console.log('welcome walton');
}
else if(mobileCheck=='I am Apple'){
    console.log('welcome Apple');
}
else if(mobileCheck=='I am Samsung'){
    console.log('welcome Samsung');
}
else{
    console.log('who are you?');
} 
*/


//new class start here

let includeTest = '+880223888438';
let result = includeTest.includes('+88')

if  (result==true){
    console.log('Welcome');
}
else{
    console.log('wrong country');
}

//Regex start hee
let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

let email='info@gamil.com';

if(!emailRegex.test(email)){
   console.log('email is wrong');
   }
else{
    console.log('email is alright');
}


let numberRegex = /^\d+$/;

let number = '12343';

if(numberRegex.test(number)){
    console.log('welcome');
   }
else{
    console.log('Number required');
}

//function start here
var a;
var b;

function riceMill(a,b){
    let c = a+b;
    console.log(c);
}
riceMill(30,20);

function nsFunction(a,b){
    let c = a/b;
    console.log(c);
}
nsFunction(30,10);


function functionReturnTest(){
    let m=30;
    let n=90;
    let t= m+n
    return t;
}

functionReturnTest();
let value = functionReturnTest();
console.log(value);

//console.log(functionReturnTest());