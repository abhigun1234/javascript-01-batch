fruits=["Mango","Banana","Apple","Orange"]
console.log(fruits[0])
console.log(fruits[1])
// for(let i=0;i<fruits.length;i++){
//     console.log("fruits",fruits[i])
// }
for (var fruit of fruits){
    console.log("fruit",fruit)
}
persons=[{name:'rina',address:"bhopal",age:12},{name:'ram',address:"bhopal",age:22}]
// for(var i=0;i<persons.length;i++){
//     console.log("person",persons[i].age)
// }
for(var person of persons){

    console.log("person",person.age) 
}
// name phone-no,email,marks
//check the highest marks among 5 