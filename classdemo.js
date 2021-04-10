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


class Person{

constructor(name,id){
   const personArr=[]
   personArr.push(name)
   this.name=name
   this.id=id
   console.log("personarr",personArr)

}

walk(){

   console.log("walking")
}

personInfo(name,id,phone_no){
  let personArr=[]

  
  personArr.push(name)
  personArr.push(id)
  personArr.push(phone_no)
 return personArr
}


}
var p1=new Person('jyoti',1)
var p2=new Person('abhishek',3)
p1.walk()
console.log(p1.name)
console.log(p2.name)
data=p1.personInfo("ravi",2,232333333)
console.log("data",data)


