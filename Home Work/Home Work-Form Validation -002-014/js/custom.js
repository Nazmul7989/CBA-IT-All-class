let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#myEmail');
let pwd = document.querySelector('#pwd');
let icon = document.querySelector('#icon');
let confirmedPwd = document.querySelector('#confirmedPwd');
let condition = document.querySelector('#condition');
let submitBtn = document.querySelector('#submitBtn');

let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;



submitBtn.addEventListener('click',()=>{
    if (fname.value===''){
        toastr.error('First name required!');
    }
    else if(lname.value===''){
        toastr.error('Last name required!');
    }
    else if(email.value===''){
        toastr.error('Email required!');
    }
    else if(pwd.value ===''){
        toastr.error('Password required!');
    }
    else if(!passwordRegex.test(pwd.value)){
        toastr.error('Password required Minimum 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
    }
    else if(confirmedPwd.value===''){
        toastr.error('Confirmed password required!');
    }
    else if(pwd.value != confirmedPwd.value){
        toastr.error('Password need to be Matched!');
    }
    else if(condition.checked===false){
        toastr.error('Agree terms and conditions!');
    }
     else if(!emailRegex.test(email.value)){
        toastr.error('You have entered an invalid email address!');
    }
});


//icon.addEventListener('click',()=>{
//    if(pwd.type === 'password'){
//        pwd.type = 'text';
//        icon.className = 'far fa-eye-slash';
//    }
//    else{
//        pwd.type = 'passwod';
//        icon.className = 'far fa-eye'; 
//    }
//})

function showPwd(){
    if(pwd.type == 'password'){
        pwd.type = 'text';
        icon.className = 'far fa-eye-slash';
    }
    else{
        pwd.type = 'password';
        icon.className = 'far fa-eye';
    }
};