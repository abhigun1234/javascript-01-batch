// const  url ='./person.js'
// function myJson(){

//     fetch('./person.json').then(res=>
//     res.json()).then(data=>{
//         console.log("data",data)
//     })
// }

// myJson()


document.getElementById('empdata').innerHTML = "result";
//console.log(empdata);
//empdata.textContent='Employee data'

// console.dir(document);
// console.log(document.URL);
 
// const hTag = document.querySelector('h1');
// console.log(hTag);
// hTag.textContent = 'Hello World';
// console.log(hTag.textContent);
// const divTag = document.querySelector('div');
// console.log(divTag);
 
// const divs = document.querySelectorAll('div');
// console.log(divs);
 
// divs.forEach(function(ele){
//     console.log(ele);
// })
// divs.forEach(ele => console.log(ele));
 
// divs.forEach((ele,index,arr) => {
//     console.log(ele);
//     ele.textContent = 'NEW '+ index;
//     //console.log(arr);
// })
 
// divs[0].textContent = 'Hello 1';
// divs[1].textContent = 'Hello 2';
 
// const divs = document.querySelectorAll('div');
// const inValue = document.querySelector('.val');
// const hTag = document.querySelector('h1');
// const span = document.querySelector('span');
 
// inValue.style.fontSize = '3em';
// let counter = 0;
// const btn = document.createElement('button');
// btn.textContent = 'Click Me';
// btn.addEventListener('click',(e)=>{
//     const newDiv = document.createElement('div');
//     document.body.append(newDiv);
//     counter++;
    
//     newDiv.textContent = `${inValue.value} ${counter}` ;
//     newDiv.addEventListener('click',myClick);
// })
 
// const val1 = span.append(btn);
// const val2 = span.appendChild(btn);
 
// console.log(btn);
 
// inValue.addEventListener('click',(e)=>{
//     if(inValue.getAttribute('type') =='text'){
//         inValue.setAttribute('type','number');
//     }else{
//         inValue.setAttribute('type','text');
//     }
 
// })
 
// divs.forEach((div,ind)=>{
//     console.log(div);
//     inValue.value = ind;
//     div.textContent = `<h2>Hello World</h2> ${inValue.value + 1}`;
//     div.innerHTML = `<h2>Hello World</h2> ${inValue.value + 1}`;
 
//     div.addEventListener('click',myClick);
 
// })
 
 
// function myClick(e){
//     console.log(e.target); 
//     e.target.classList.toggle('box');
// }
 
// hTag.addEventListener('click',(e)=>{
//     console.log(e.target);
//     hTag.style.color = 'white';
//     if(hTag.textContent == 'JavaScript'){
//         hTag.textContent = 'test';
//         hTag.style.backgroundColor = 'blue';
//     }else{
//         hTag.textContent = 'JavaScript';
//         hTag.style.backgroundColor = 'red';
//     }
// })
 