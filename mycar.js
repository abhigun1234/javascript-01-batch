class Car{

  constructor(id,model,price,color){
   console.log("id",id)
   console.log("name",model)
   console.log("price",price)
   console.log("color",color)
  }
  start(){

   console.log("car is started")
  }
 
  setName(name){

   this.model=name
  }
  getName(){
      return this.model
  }

}
class SuperCar extends Car{
   constructor(){
   super()
   }
  mySuperDCar(){

    console.log("super car")
  }


}
//object 
// var c1=new Car(1,'112',2345,'white')
// c1.start()
// c1.setName("12345")
// let modelno=c1.getName()
// console.log("modelno",modelno)
var s1=new SuperCar()

s1.mySuperDCar()
console.log("",s1.getName())
