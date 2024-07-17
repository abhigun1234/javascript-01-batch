// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.push("water melon")
// // console.log("fruits",fruits)
// // fruits.pop()
// // console.log("fruits",fruits)
//  fruits.unshift("Lemon");
//  console.log("fruits",fruits)
// fruits.shift();  
// console.log("fruits",fruits)
// fruits.splice(0, 3);  
//  console.log("fruits",fruits)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];   
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);  

// let myArray=[1,"abhi",{name:"hhh"}]
// console.log("array first aliment",myArray[2].name)

// var personData=[{"id":1,"first_name":"Tallulah","last_name":"Chuck","email":"tchuck0@adobe.com","gender":"Female"},
// {"id":2,"first_name":"Gaynor","last_name":"Turk","email":"gturk1@sakura.ne.jp","gender":"Genderfluid"},
// {"id":3,"first_name":"Garreth","last_name":"Raveau","email":"graveau2@zimbio.com","gender":"Male"},
// {"id":4,"first_name":"Ambrosius","last_name":"Fader","email":"afader3@mapquest.com","gender":"Male"},
// {"id":5,"first_name":"Rhys","last_name":"Banes","email":"rbanes4@g.co","gender":"Male"},
// {"id":6,"first_name":"Brett","last_name":"Burland","email":"bburland5@fastcompany.com","gender":"Male"},
// {"id":7,"first_name":"Mal","last_name":"Schoenfisch","email":"mschoenfisch6@squidoo.com","gender":"Male"},
// {"id":8,"first_name":"Rochella","last_name":"McGaugie","email":"rmcgaugie7@sbwire.com","gender":"Female"},
// {"id":9,"first_name":"Tarah","last_name":"McGaughay","email":"tmcgaughay8@ehow.com","gender":"Female"},
// {"id":10,"first_name":"Gussy","last_name":"Menichini","email":"gmenichini9@google.ca","gender":"Female"}]

// 1

// for(var i=0;i<personData.length;i++){

//     console.log("name",personData[i].first_name)
// }

// 
// for(let personvar of personData){
//     console.log("first name",person.first_name)
// }

// const i=0;
// i="hhhf"
// some and every 
var ages = [23, 2, 29, 29];

function checkAdult(age) {
  console.log("age",age)
    return age >= 18;

}

value=ages.every(checkAdult)
console.log("value",value)
