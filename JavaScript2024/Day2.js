// // //
// // function hello(name){
// //  console.log("hello",name)
// //     return 'hello'
// // }

// // var str=hello('ram')
// // console.log("str",str)
// var a=10;
// var b={"name":"ravi"}
// function callByValRef(a,b){
//     a=23
//     b.name='rakesh'
//     console.log("inside function a",a)
//     console.log("inside function  b",b)

// }

// callByValRef(a,b)
// console.log("after calling function a",a)
// console.log("after calling function b",b)
//1
// function hello(){
//     console.log("hello")
// }
// hello()
// //2
// var hello=function(){
//     console.log("hello")
// }
// hello()
// //3 
// var hello=()=>{
//     console.log("hello")
// }
// hello()

// function bookTable(fun){
//  setTimeout(()=>{
//     fun()
//  },3000)

// }
// function available(){
// console.log("your table is availanle please contact to reception")
// }

// bookTable(available)