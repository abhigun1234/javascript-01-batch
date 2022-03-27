// object
// person={name:'ravi',age:34}
// console.log("person",person.name)
// console.log("person",person.age)
// // array
// var myarr=[1,2,34,4,56]
// persons=[{name:'ravi',age:23},{name:'ravi1',age:23},{name:'ravi2',age:23},{name:'ravi3',age:23}]
// // console.log("myarr[0]",myarr[0])
// // console.log("myarr[0]",myarr[1])

// for(var i=0;i<myarr.length;i++){

//     console.log("i",myarr[i])
// }
// for(var i=0;i<persons.length;i++){

//     console.log("i",persons[i].name)
//     console.log("i",persons[i].age)
// }

  const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("sweet lime")
console.log("fruits",fruits)
fruits.unshift("Sweet Lime")
console.log("fruits",fruits)
fruits.shift()
console.log("fruits",fruits)
fruits.splice(0, 3); 
console.log("fruits",fruits)
delete fruits; 
// console.log("fruits",fruits)
