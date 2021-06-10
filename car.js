class Car{
    constructor(name,modelno){
    console.log("constructor")
    }
    run(){
    console.log("car is running")
   }

}
class SuperCar extends Car{

    constructor(){

    }
    superPower(){

        console.log(" car is awsome")
    }
}
class ExtraSuper extends SuperCar{
    constructor(){

    }
    extresuperPower(){

        console.log(" car is awsome")
    }
}
//object 

var maruti=new Car()
var superpower=new SuperCar()
maruti.run()
var extrasuperpower=new ExtraSuper()
extresuperPower.r
