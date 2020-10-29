let name= document.querySelector('#nameId');
let email= document.querySelector('#emailId');
let password= document.querySelector('#passwordId');
let confirmedPassword= document.querySelector('#conPassId');
let submitButton= document.querySelector('#submitBtn');

submitButton.addEventListener('click',()=>{
    if(name.value===''){
       alert('Name Required!');
       }
    else if(email.value===''){
        alert('Email Required!');
    }
    else if(password.value===''){
        alert('Password Required!');
    }
    else if(confirmedPassword.value===''){
        alert('Confirmed Password Required!');
    }
    else if(password.value != confirmedPassword.value){
        alert('Password should be matched!');
    }
});