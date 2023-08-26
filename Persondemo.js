class Person{
// member function getting called once we are creating the object of the class
//intilize the class member
constructor(_name,_phone_no){
   
    console.log("person called")
    this.name=_name
    this.phone_no=_phone_no
   console.log("name",this.name) 
   console.log("phone no",this.phone_no) 
}
getName(){
console.log("name",this.name)
}
setName(_name){
    this.name=_name
}
}

class Employee extends Person {

    constructor(){
       
        console.log("employee calld")
        super(this)
    }


}

let e1=new Employee()


// let p1=new Person("ram","8888888888")
// p1.getName()
// p1.setName("rahul")
// p1.getName()
// // let p2=new Person("ramesh","9999999999")
// // let p3=new Person("mahesh","9099999999")
// // console.log("outside name",p1.name) 
// // console.log("outside  phone no",p1.phone_no) 


// // console.log("outside  name",p2.name) 
// // console.log("outside  phone no",p2.phone_no) 

// // // name price description
// construtor("")