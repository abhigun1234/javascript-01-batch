// class Polygon { 
//    constructor(height, width) { 
//       this.h = height; 
//       this.w = width;
//    } 
//    test() { 
//       console.log("The height of the polygon: ", this.h) 
//       console.log("The width of the polygon: ",this. w) 
//    } 
// } 

// //creating an instance  
// var polyObj = new Polygon(10,20); 
// polyObj.test(); 


class Person {

  constructor(name,phone_no,address,counter){

   console.log("hello constructor",name)
   console.log("hello constructor",phone_no)
   console.log("hello constructor",address)
   this.name=name
   this.address=address
   this.phone_no=phone_no

  }

  getAddress(){

   console.log("address")
  }
  setAddress(_address){
  console.log(" setAddress address",_address)
   this.address=_address
     
  }
}

let p1=new Person("sujata","66666666","pune")
console.log("bef p1.address",p1.address)
p1.setAddress('jalgao')
console.log("after p1.address",p1.address)
