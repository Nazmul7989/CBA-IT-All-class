let submitBtn = document.querySelector('#submitBtn');
let output = document.querySelector('#output');
let title = document.querySelector('#title');

submitBtn.addEventListener('click',()=>{
    event.preventDefault()
    let number = document.querySelector('#number').value;
    if(number== ''){
        window.alert('input field should not be empty');
    }
    else if(number==0){
         window.alert('input field should not be zero');
    }
    
    title.innerHTML = 'Multiplication Table of'  +number;
    output.innerHTML = '';
    for(let i= 1; i<=10; i++){
    let result = number + 'x'+i+ '=' +number*i;
        let p = document.createElement('p');
        p.innerText = result;
        output.appendChild(p);
    }
})