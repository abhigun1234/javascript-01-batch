// scope and declare
//es5
// global scope 
{
    var a=10;
}
console.log("a=",a)
function add(){
// functional scope
    var b=12;
}
// console.log("b=",b)

// let const

{
   const x=23;
//    console.log("x",x)
// x=27
}

// operators    arthemetic comperision conditional 

// == ===

var x=12
var y='12'

console.log(x===y)

//null undifined  
s=null

console.log(typeof(undefined))
console.log(typeof(null))
d=12
console.log(d ** 2)
//for loop 

// for (var k=0;k<10;k++){

//     console.log("k=",k)
// }
// console.log("k=",k)

var students=["pooja","rakesh","himanshu","rahul"]

// for (var i=0;i<students.length;i++){

//     console.log("i=",i)
//     console.log("student=",students[i])
// }
students.push("mandar")
for (let student of students){
    console.log("student",student)
}
//wrp to enter name email phone no prompt push the data in address array and print hole address  
// var name1=prompt("enter name")

// alert(name1)
// function block of structure wchich can perform a perticular task


function welcome(str){

    console.log("Welcome to the world of js",str)
}
welcome('Pankaj')
// call by value or ref value ref
// primetive type call by val if i pass obj its by ref