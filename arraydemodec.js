// var ages = [32, 33, 19, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// value=ages.every(checkAdult)
// console.log("value",value)

// var ages = [30, 1, 11, 2];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.some(checkAdult)
// console.log("value",value)

//map and filter
// const arr=[1,2,3,5,6]
// const newArr=arr.filter(callBack)
// console.log("newArr",newArr)
// function callBack(){

//    return  a%2!=0
// }
// console.log("newArr",newArr)
// const newArrmap=arr.map(a=> a*a)
//  console.log("newArr",newArrmap)

function hello(str,fun){

   console.log("hello",str)
   fun()
}
function bye(){

   console.log("bye")
}
hello("abhishek",bye)






