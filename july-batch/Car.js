class Car{
//
    constructor(name,color,model){
         console.log("name",name)
         console.log("color",color)
         console.log("model",model)
         this._name=name
         this._color=color
         this._model=model


    }
    getMilage(){

        return "12 km / liter"
    }

// constructor(){
//     console.log("constructor invoked")
// }

}
// create object in the java script
let c1=new Car('maruti','red',123)
console.log("color",c1._color)
console.log("name",c1._name)
console.log("model",c1._model)
var milage=c1.getMilage()
console.log("milage",milage)

