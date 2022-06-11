// let var const

// for (var i = 0; i < 10; i++) {
//     console.log("i==", i)
// }
// console.log("out side i==", i)
// for (let j = 0; j < 10; j++) {
//     console.log("j==", j)
// }
// console.log("out side j==", j)
// // const
// const i=0;

// i=23
// //hoisting in java script
// i=0
// console.log("i==",i)
// let i;
// hello()
// function hello(){
//     console.log("hello")
// }
// rest operator

// function add(...arrNums){
//   console.log("arrNums",arrNums)
//     return arrNums
// }

// add(2,3,5,6)
// console.log("result",result)
// car ={name:'hundai',models:['800','alto','swift','scross'],price:'345677',


// carName : function() {
//     return this.name 
//   }
// }
// console.log("name",car.name)
// console.log("name",car.price)
// console.log("name",car.models)
// console.log("call functiom",car.carName())

/// 
// person=["ram",18,"shyam",20]
// console.log("person",person[0])

// fruits=['mango',"banana","apple","orange"]
// for(let fruit of fruits){
//     console.log("fruit",fruit)
// }
//2
// for(let i=0;i<fruits.length;i++){
//     console.log("fruits",fruits[i])
// }
// persons=[{name:"abhi",age:24,email:"abhi@gmail.com"},
// {name:"kavi",age:24,email:"abhi@gmail.com"},
// {name:"ravi",age:24,email:"abhi@gmail.com"},
// {name:"chabi",age:24,email:"abhi@gmail.com"}]
// for(let person of persons ){

//     console.log("person name",person.name)
//     console.log("person age",person.age)
//     console.log("person email",person.email)
// }
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// add  a element end of the array
fruits.push("sweet lime")
console.log("fruits",fruits)
fruits.unshift("sweet lime")
console.log("fruits",fruits)
fruits.pop()
console.log("fruits",fruits)
fruits.shift()
console.log("fruits",fruits)
// fruits.shift();  
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];   
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);  