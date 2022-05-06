// var arr = ["Hello", "World","bye"]  
  
// // destructuring assignment  
// var [first, second,third] = arr;  
  
// console.log(first); // Hello  
// console.log(second); // World  
// console.log(third); // World  
//push pop shift unshift

//  const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("sweet lime")
// console.log("fruits",fruits)
// fruits.unshift("Sweet Lime")
// console.log("fruits",fruits)
// fruits.shift()
// console.log("fruits",fruits)
// fruits.splice(0, 2); 
// console.log("fruits",fruits)
// delete fruits; 
// console.log("fruits",fruits)

//every and some
var products=[{id:1,name:'tv',price:2000}]


// var ages = [32, 33, 9, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// value=ages.every(checkAdult)
// console.log("value",value)

// var ages = [3, 1, 1, 2];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.some(checkAdult)
// console.log("value",value)


//map and filter
const arr=[1,2,3,5,6]
// const newArr=arr.filter(a=> a%2===0)
// console.log("newArr",newArr)
// for for each map 
students=[{name:'ravi',address:"delhi"},{name:'ravi',address:"delhi"}]
const newArrmap=students.map(myFunc)

function myFunc(){

   
    for(var i=0;i<students.length;i++){

        console.log("item",students[i])
    }
   
}
// for(var i=0;i<students.length;i++){

//     console.log("item",item)
// }
//  console.log("newArr",newArrmap)




// // //foreach
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.forEach((item,index,arr)=>{
// //     console.log("item",item,index) 
// // });
// var products=[{id:1,name:'addidas',price:2000},
// {id:2,name:'nike',price:4000},{id:3,name:'rebook',price:8000}]

// products.forEach(callBack)


//  function callBack(item,index,arr){
//     priceArr=[]
//     console.log("item",item.name,item.price,index)
//     priceArr.push(item.price)
//     if(item.price>5000){

//         return true
//     }

//  }



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


//  var fruits = ["Banana", "Orange", "Apple", "Mango"];
//  var n = fruits.includes("Mango");
//  console.log("n",n)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Apple");
// console.log("a",a)
// delete  fruit[a]

// var hello=function(){


// }
// var hello=(str)=>{
// console.log("str",str)

// }

// hello('abhi')