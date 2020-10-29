let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#myEmail');
let pwd = document.querySelector('#pwd');
let confirmedPwd = document.querySelector('#confirmedPwd');
let condition = document.querySelector('#condition');
let submitBtn = document.querySelector('#submitBtn');

let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;




submitBtn.addEventListener('click',()=>{
    if (fname.value===''){
        alert('First name required!');
    }
    else if(lname.value===''){
        alert('Last name required!');
    }
    else if(email.value===''){
        alert('Email required!');
    }
    else if(pwd.value ===''){
        alert('Password required!');
    }
    else if(pwd.value.length <4){
        alert('Minimum 4 character required!');
    }
    else if(confirmedPwd.value===''){
        alert('Confirmed password required!');
    }
    else if(pwd.value != confirmedPwd.value){
        alert('Password need to be Matched!');
    }
    else if(condition.checked===false){
        alert('Agree terms and conditions!');
    }
//    else if(!email.value.match(emailRegex)){
//        alert('You have entered an invalid email address!');
//    }
     else if(!emailRegex.test(email.value)){
        alert('You have entered an invalid email address!');
    }
});