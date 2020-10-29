let nameID = document.querySelector('#nameID');
let email = document.querySelector('#emailID');
let password = document.querySelector('#passwordID');
let conPassword = document.querySelector('#conPasswordID');
let details = document.querySelector('#detailsID');
let check = document.querySelector('#checkID');
let submit = document.querySelector('#submitID');
let pwdIcon = document.querySelector('#pwdIcon');


let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submit.addEventListener('click',()=>{
    if(nameID.value == ''){
        toastr.error('Name Required!');
    }
    else if (email.value === ''){
        toastr.error('Email Required!');
    }
    else if (!emailRegex.test(email.value)){
        toastr.error('Invalid Email!');
    }
    else if(password.value == ''){
        toastr.error('Password Required!');
    }
    else if(conPassword.value == ''){
        toastr.error('Confirmed Password Required!');
    }
    else if(password.value != conPassword.value){
        toastr.error('Password and confirm password should be matched!');
    }
    else if(!passwordRegex.test(password.value)){
        toastr.error('Password Required Minimum 6 characters amd maximum 16 characters, at least one number and one special characte!');
    }
    else if(details.value == ''){
        toastr.error('Write your description!');
    }
    else if(check.checked == false){
        toastr.error('Agree terms and conditions!');
    }
});


//pwdIcon.addEventListener('click',()=>{
//    
//    if(password.type == 'password'){
//        password.type = 'text';
//        pwdIcon.className = 'fas fa-eye-slash';
//    }
//    else{
//        password.type = 'password';
//        pwdIcon.className = 'fas fa-eye';
//    }
//})

function showPwd(){
    if(password.type == 'password'){
        password.type = 'text';
        pwdIcon.className = 'far fa-eye-slash';
    }
    else{
        password.type = 'password';
        pwdIcon.className = 'far fa-eye';
    }
}
