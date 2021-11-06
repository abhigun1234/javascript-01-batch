 const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("sweet lime")// push adding eliment end 
// console.log("fruits",fruits)
// fruits.unshift("Sweet Lime")
// console.log("fruits",fruits)
// fruits.shift()
// console.log("fruits",fruits)
// fruits.splice( 3); 
// console.log("fruits",fruits)
// delete fruits; 
// console.log("fruits",fruits)

// function hello(str){

//   console.log("hello",str)
//   return 'hello abhishek'
// }

// var result=hello('abhishek')
// console.log("RESULT",result)
// es6
// var hello=function(){

//  console.log("hello")   
// }
// hello()

// es6

// const hello=(str)=>{
//     console.log("hello")   
//  return 'hhhh'
// }

// var gg=hello('bye')

class Person{

    constructor(_id,_name){
   console.log("hello constructor parent")
   this.id=_id;
   this.name=_name
    }
    getPersonData(){

        console.log("id",this.id)
        console.log("name",this.name)
    }
}


let p1=new Person(1,'abrar')
p1.getPersonData()
let p2=new Person(2,'abhishek')
p1.getPersonData()

class Employee extends Person{

    constructor(){
        console.log("constructor of child")
        super()
    }
}
let e1=new Employee()
