class Car{


    constructor(){

        console.log("hello")
    }
    //behiviur
    run(){
    console.log("run")
    }
}

let c1= new Car()
c1.run()
class SuperClass extends Car{


    superFast(){

        console.log("running")
    }
}

let s1=new SuperClass()








// class Car{
//     constructor(name,modelno){
//     console.log("constructor")
//     }
//     run(){
//     console.log("car is running")
//    }

// }
// class SuperCar extends Car{

//     constructor(){

//     }
//     superPower(){

//         console.log(" car is awsome")
//     }
// }
// class ExtraSuper extends SuperCar{
//     constructor(){

//     }
//     extresuperPower(){

//         console.log(" car is awsome")
//     }
// }
// //object 

// var maruti=new Car()
// var superpower=new SuperCar()
// maruti.run()
// var extrasuperpower=new ExtraSuper()

