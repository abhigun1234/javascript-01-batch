//push pop shift unshift

//  const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("sweet lime")
// console.log("fruits",fruits)
// fruits.unshift("Sweet Lime")
// console.log("fruits",fruits)
// fruits.shift()
// console.log("fruits",fruits)
// fruits.splice(0, 3); 
// console.log("fruits",fruits)
// delete fruits; 
// console.log("fruits",fruits)
//list of objects
// [{"id":"1",name:'ravi'},{"id":"1",name:'ravi'},{"id":"1",name:'ravi'},{"id":"1",name:'ravi'}]
// const numbers = [1, 2, 3, 4, 5]
// console.log("numbers", numbers.indexOf(14))
// if (numbers.indexOf(14) === -1) {
//     console.log("data is not present in array")
// }
// else {
//     console.log("data is present in array")
// } 

// const firstArr=[1,2,3,4,5,6]
// const secondArr=[23,4,5]
// const combined=[...firstArr,...secondArr]
// console.log("combined ",combined)

// itreating in array

// arrayNums = [1, 2, 3, 4, 5, 5]

// // for(data of arrayNums){

// //     console.log("data",data)
// // }

// arrayNums.forEach(function callBack(no) {

//     console.log("no", no)
// });



// console.log("numbers",numbers.lastIndexOf(1))
// const first=[1,2,3,4]
// const  second=[1,2,3,4]
// // const combined=first.concat(second)
// const combined=[...first,...second]
// console.log("combind",combined)
// for(let number of numbers){
//     console.log("number",number)
// }
// numbers.forEach(callback)
// function callback(num){

//     console.log("num",num)
// }
//filter sum num

// filterdArray=numbers.filter(filterData)
// function filterData(value){
//  return value %2==0
// }
// console.log("filterdArray",filterdArray)

//map and filter
//const arr=[1,2,3,5,6]
// const newArr=arr.filter(a=> a%2!=0)
// console.log("newArr",newArr)
// const newArrmap=arr.map(a=> a*a)
//  console.log("newArr",newArrmap)


// filter data 

// const arrData = [1, 2, 3, 4, 5, 6, 7, 8]
// filterdArr = arrData.filter(function callBack(num) {

//     return num % 2 == 0;
// }
// )
//  const newArrmap=arrData.map(a=> a*a)
//  console.log("newArrmap",newArrmap)


// console.log("filterdData", filterdArr)

//every and some
var products=[{id:1,name:'tv',price:2000}]


var ages = [1, 2, 9, 3];

function checkAdult(age) {
  return age >= 18;
}

value=ages.some(checkAdult)
console.log("value",value)

// var ages = [3, 1, 1, 2];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.some(checkAdult)
// console.log("value",value)


