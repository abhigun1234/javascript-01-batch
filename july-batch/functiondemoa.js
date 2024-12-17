// // this is called as a function defination
// function hello(str){
// console.log("hello",str)

// }

// calling
// hello("aditi")

// var no1=10;
// var no2=20;
// function add(a,b){
//     return a+b
// }


// result=add(no1,no2)
// // console.log("result",result)


// function Welcome(str){
//     console.log("welocme",str)
// }

// Welcome("aditi")

// // anonmius function
// function hello(){
//     console.log("hello")
// }

// var hello=function (){

//     console.log("hello")
// }

// // // es6 fa arrow function
// var hello=()=>{

//     console.log("hello")
// }

// hello()



//call by value 


// var no=prompt("enter a  no")
// var square=(no)=>{

//     return no*no
// }
// var result=square(no)
// console.log("result",result)


var a=12
var b={name:"ram"}


function callByValRef(no1,no2){
 no1=56;
 no2.name="raj"
}
console.log("a==",a)
console.log("b==",b)
callByValRef(a,b)

console.log("a==",a)
console.log("b==",b)
