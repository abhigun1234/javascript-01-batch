// class Person{
//     _name='abhishek'
//     constructor(name){
//         //this._name=name
//     }
//     display(){
//         console.log("name",this._name)
//     }
// }
// let  p1=new Person()
// p1.display()
var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
 data= person.fullName()
 console.log(data)