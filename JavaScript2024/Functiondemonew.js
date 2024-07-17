// hello()
// function hello(){

//     console.log("hello")
// }
// // calling
// //hoisting 

// console.log("a",a)
// var a


// function hello(str,str1){
//     return 'hello'+str+''+str1
// }

// var data=hello('aditi','vaisali')
// console.log("data",data)
var a=10;
var b={name:'ravi',address:'pune'}
var flag=true

function callByBalCalByRef(x,y,flag){
    x=23;
    y.name='vaishali'
    y.address='patiyala'
    console.log("a",flag)
    flag=false
console.log("flag",)
}
console.log("a",a)
console.log("b",b)
console.log("flag",flag)
callByBalCalByRef(a,b,flag)
console.log("a",a)
console.log("b",b)
console.log("flag",flag)