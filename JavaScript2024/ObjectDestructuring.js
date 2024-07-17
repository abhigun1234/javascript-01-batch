// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }
// let name = user.name;
// let age = user.age;
// console.log(name, age);
// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }
// const { name } = user;

// console.log(name); // Output, Alex
// const { address } = user;

// console.log(address); // Output, Alex
// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // Expected output: 10

// console.log(b);
// // Expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // Expected output: Array [30, 40, 50]

const person={name:'aditi',address:'noida'}
const { name } = person;
const { address } = person;
console.log("print name",name)
console.log("address",address)
const pesonArray=["raipur","cg"]
const [city,state]=pesonArray
console.log("city",city)
console.log("state",state)