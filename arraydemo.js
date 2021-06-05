
// push pop shift unshift

//  const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("sweet lime")
// console.log("fruits",fruits)
// fruits.unshift("Sweet Lime")
// console.log("fruits",fruits)
// fruits.shift()

// fruits.splice(0, 2); 




//every and some
// var products=[{id:1,name:'tv',price:2000}]


// var ages = [32, 33, 1, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// value=ages.every(checkAdult)
// console.log("value",value)

// var ages = [3, 10, 18, 20];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.some(checkAdult)
// console.log("value",value)


//map filter
const arr=[1,2,3,4,5,6]
const newArr=arr.filter(a=> a%2===0)
console.log("newArr",newArr)
// const newArrmap=arr.map(a=> a*a)
// console.log("newArr",newArrmap)




//foreach
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index) 
// });

// for (let i=0;i<fruits.length;i++){

//     console.log("fruits",fruits[i])
// }
// fruits.forEach()
//  fruits.forEach(callBack)


//  function callBack(item,index,arr){

//     console.log("item",item,index)
//  }
  
//  fruits.push('papya')
//  console.log(fruits)
//  fruits.pop()
//  console.log(fruits)
//  fruits.unshift("Sweet Lime")
//  console.log("fruits",fruits)
//  fruits.shift();

//  fruits.splice(0, 2); 
//  console.log("fruits",fruits)
//  delete fruits[0]; 
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();  
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];   
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);  

// for each 

// fruits.forEach(callBack)

// function  callBack(item,index,arr){
//    console.log("item",item,index) 
// }
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index) 
// });
// fruits.forEach(item=>{
//     console.log("item",item) 
// });


// map method
// const  numbers=[{name:'abhishek',address:'pune'},{name:'sashi',address:'banglore'}]




// // const numberDubble=numbers.map(dubble)
// const numberDubble= numbers.map((item,index,arr)=>{
//     console.log(item.name)
//     console.log(index)
//     console.log(arr)
//   })
//   console.log("numberDubble",numberDubble)
// function dubble(value,index ,arr){
//   return value **2;
// }
// console.log(numberDubble)

//filter method 
// const  numbers =[1,2,3,4,5,6,7,8,9,10]
// const even=numbers.filter(isEven)
// function isEven(value){
//     return value % 2===0;
// }
// console.log(even)
// const people=[{
//     name:'ravi',
//     age:19
// },
// {
//     name:'kavi',
//     age:3
// },
// {
//     name:'mavi',
//     age:18
// }
// ]
// const adults =people.filter(person=>person.age>=3)
// console.log("adults".adults)


// function add(...nums){

// console.log("nums",nums)
// // return a+b

// }

// sum=add(2,3)
// sum=add(2,3.6)
// sum=add(2,3.6,4,5)
// // console.log("sum",sum)
// let sports=["cricket","football","bedmenton"]
// sports.splice(2,0,"kabadi","vollyball")
// console.log(sports)
//array distructuring  
//