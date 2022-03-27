// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("SweetLime")//add end of the array
// console.log(" push fruits",fruits)
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
// fruits.splice(0, 1);  
// var ages = [32, 33, 19, 40];

// function checkAdult(age) {
//   return age >= 2;
// }

// value=ages.every(checkAdult)
// console.log("value",value)

// var ages = [20, 1, 11, 2];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.some(checkAdult)
// console.log("value",value)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index) 
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
// function add(...nums){

//    console.log("rest",nums)
// }
// var value=add(12,12)
// var value=add(12,12,13)
// var value=add(12,12,13,12,14,23,1222)
// // console.log("value",value)
// rest used in function as a arg
arr1=[1,2,3]
arr2=[2,3,4]
arr3=[2,3,4,5]
var arr4=[...arr1,...arr2,...arr3]
console.log("arr4",arr4)
//  var arr3=arr1.concat(arr2)
// var arr6=arr4.concat(arr3)
// console.log("arr6",arr6)