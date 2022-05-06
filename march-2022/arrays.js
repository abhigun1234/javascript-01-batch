// var fruits = ["Banana", "Orange", "Apple", "Mango",8];

// fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index) 
// });
// name=prompt("enter name")
// fruits.push("Sweet Lime")
// console.log("after adding element")
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index) 
// });
// fruits.pop()
// console.log("after deleting last element")
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index) 
// });

//let ,var ,const

// for(var i=0;i<10;i++){

//     console.log("i",i)
// }
// console.log("i=",i)
// for(let j=0;j<10;j++){

//     console.log("j",j)
// }
// console.log("j",j)

// const i=12;
// console.log("i",i)
// i=34

// for(let i=0 ;i<fruits.length;i++ ){

//     console.log("fruit",fruits[i])
// }
// for(fruit of fruits){
//     console.log("fruit",fruit)
// }
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("SweetLime")//add end of the array
// console.log("111 push fruits",fruits)
// fruits.shift();  //deleting first element of the array
// console.log(" shift fruits",fruits)
// fruits.pop();  // deleting end element of the array
// console.log("pop fruits",fruits)
// fruits.unshift("sweetlime")// adding element in the first element
// console.log("unshift fruits",fruits)
// delete fruits[1]
// console.log("unshift fruits",fruits)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];("push "  add end of the array)
// fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];   
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(3);  
// console.log("fruits",fruits)

//some and every 
// var ages = [22, 3, 9, 0];

// function checkAdult(age) {
//   return age >= 22;
// }

// value=ages.some(checkAdult)
// console.log("value",value)

// var ages = [20, 1, 11, 2];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.some(checkAdult)
// console.log("value",value)
// var fruits = [{fruit:"Banana", fruit:"Orange"},{ fruit:"Apple", fruit:"Mango"}];
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item.fruit,index) 
//     console.log("arr",arr) 
// });
// for( fruit of fruits){
//     console.log("item",item,index) 
// }
// fruits.forEach(item=>{
//     console.log("item",item) 
// });

// personArray=[{name:"riya",age:23},{name:"nikita",age:22}]
// //map and filter
// const arr=[1,2,3,5,6]
// // const newArr=personArray.filter(person=> person.age>18)
// //console.log("newArr",newArr)
// const newArrmap=arr.map(n=> n*n)
//  console.log("newArr",newArrmap)
//rest
// function add(...nums){

//    console.log("rest",nums)
// }
// var value=add(12,12)
// var value=add(12,12,13)
// var value=add(12,12,13,12,14,23,1222)
// // console.log("value",value)
// rest used in function as a arg
// arr1=[1,2,3]
// arr2=[2,3,4]
// arr3=[2,3,4,5]
// var arr4=[...arr1,...arr2,...arr3]
// console.log("arr4",arr4)
//  var arr3=arr1.concat(arr2)
// var arr6=arr4.concat(arr3)
// console.log("arr6",arr6)
//  

// products.forEach(callBack)


//  function callBack(item,index,arr){
//     priceArr=[]
//     console.log("item",item.name,item.price,index)
//     priceArr.push(item.price)
//     if(item.price>5000){

//         return true
//     }

//  }

//filter method 
// const  numbers =[1,2,3,4,5,6,7,8,9,10]
// const even=numbers.filter(isEven)
// function isEven(value){
//     return value % 2===0;
// }
// console.log(even)
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x ** 2);

// console.log(map1);
// expected output: Array [2, 8, 18, 32]
// personArray=[{name:"riya",age:23},{name:"nikita",age:22},{name:"nikita",age:12},

// {name:"nikita",age:32}]

// personArray.map(person=>{
//     console.log("person",person.name)
// })
// hoisting
// hello()//calling
// // console.log("a",a)
// function hello(){
// //    var a=10
//     console.log("hello")
// }
console.log("a",a)
var a;