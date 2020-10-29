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