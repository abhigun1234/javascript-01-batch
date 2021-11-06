console.log("hello")
// declaration
// var
var a=0;
console.log("a==",a)

a='abhishek'
console.log("a==",a)
var b;
// operators  
// arthemetic operator

// + - / * 
var x=10;
var y=20;
// addition
// console.log("addition",x+y)
// console.log("multiplication",x*y)
// console.log("substrect iobn",x-y)
// console.log("squere",x**2)
// conditional > < >= <= == ===

// if else
// if(x>y){

//     console.log("x is greter then y")
// }
// else{
//     console.log("y is greter then x")

// }

// var  p=10;
// var q='10';

// console.log("==",p==q)

// console.log("===",p===q)
// var a=prompt("enter first no")
// var b=prompt("enter second no")

// if(a>b){
//     console.log("a is greater")
// }
// else{
//     console.log("b is greater")

// }

// while do while for loop

var i=0;
// while (i<10){

//     console.log("i==",i)
//     i++
// }

// var j=0;
// do{

// console.log("j==",j)
// j++
// }while(j<10)

// for loop

// for (var i=0;i<10;i++){

//     console.log("i==",i)
// }
//defination es6 fat arrow
// const hello=(str)=>{

//     console.log("hello world",str)
// }

//  hello('abhishek')

// function printTable(no){

//  for (var i=1;i<10;i++){
//      console.log("table",no*i)
//  }
// }


// var a=prompt('enter a no')
// printTable(a)

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

class Student{

  constructor(){

    console.log("hello constructor")
  }
    sayHello(str){
        console.log("hello",str)
    }
}
// take input
let s1=new Student()
s1.sayHello('abhi')

class Person extends Student{

    sayBye(){

        console.log("bye bye")
    }
}
let p1=new Person()

p1.sayHello()
p1.sayBye()