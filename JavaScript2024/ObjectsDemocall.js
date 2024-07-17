// const person1={
//     fName:"abhi",
//     lName:"sharma",
//     fullName:function(homeTown,country){
//         return this.fName +""+this.lName+homeTown+""+country
//     }
// }
// const person2={
//     fName:"ravi",
//     lName:"sharma",
//     // fullName:function(){
//     //     return this.fName +""+this.lName
//     // }
// }
// console.log("person2 full name",person2.fullName)

 //console.log(person1.fullName.call(person2,"mumbai","india"))
 //console.log(person1.fullName.apply(person2,["pune","india"]))
 //const result =person1.fullName.bind(person2,"pune","india")
//  console.log("rersult",result())

//es6
class Person{
   name="abhi"
   city=''
    constructor(_name,_city){
      console.log("hello constructor")
      this.name=_name;
      this.city=_city;
    }

// get product detail
}
let p1=new Person("raja","pune")
console.log("p1 name",p1.name)
console.log("p1 name",p1.city)
let p2=new Person("ram","mumbai")
console.log("p2 name",p2.name)
console.log("p2 name",p2.city)