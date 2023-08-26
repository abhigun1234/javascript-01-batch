class Employee
{

  constructor(_name){
 this.name=_name;

  }

    getName(){

    this.name="ram"
    return this.name
    }
}

class Custumer extends Employee{

 constructor(){

    super()
 }
}

let e=new Employee("abhishek")
let name=e.getName()
console.log("name",name)

let e1=new  Custumer()
console.log(e1.name)