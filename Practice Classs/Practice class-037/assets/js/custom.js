//let paragraph = document.querySelector('#paraId');
//paragraph.setAttribute('href','sobuj.net');
//console.log(paragraph);


/*let text = document.querySelector('#textId');
let btn = document.querySelector('#btnId');
let hideBtn = document.querySelector('#btnHide');

btn.addEventListener('click', ()=>{
    text.innerHTML='I am changed';
    text.classList.add('backGround');
    text.classList.remove('hide');
});

hideBtn.addEventListener('click',()=>{
    text.classList.add('hide');
});


let ulContent = document.querySelector('#ulId');
let repeatBtn = document.querySelector('#repeatBtn');

repeatBtn.addEventListener('click',()=>{
    let newContent= document.createElement('li');
    newContent.textContent='Meet';
    ulContent.append(newContent);
    })
*/

let newDiv = document.querySelector('#newDivId');
let addNew = document.querySelector('#addNewBtn');

addNew.addEventListener('click',()=>{
    let newHead = document.createElement('h1');
//    newHead.textContent='hello';
    newHead.innerHTML='Hello World';
    newDiv.append(newHead);
});
