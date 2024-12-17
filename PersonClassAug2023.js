// syntex of a class

class Person{
// member  functuion which is getting call once we are createing the object of the class
constructor(name,phone_no){
console.log("constructor called")
console.log("name",name)

console.log("phone_no",phone_no)



}
// gettert and setter
getName() {

    console.log("name",this.name)
}
setName(__name){
this.name=__name

}

}
// INPUT FROM PROMPT
// object 

name=prompt("enter user name")
let p1=new Person(name,"999999999")
personArray=[]
personArray.push(p1)
p1.getName()
p1.setName("ramesh")
console.log("p1.name",p1.name)
p1.getName()

let p2=new Person("swapna","999999999")
p2.getName()
p2.setName("rakhi")
console.log("p2.name",p2.name)
p2.getName()