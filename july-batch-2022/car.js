class Car{

//attribute member function getting call when you create the object of the class

constructor(_name,_price,_milage,_model){

    this.name=_name
    this.price=_price
    
    this.milage=_milage
    this.model=_model
    console.log("constructor called")
    console.log("name",this.name)
    console.log("price",this.price)
    console.log("milage",this.milage)
    console.log("model",this.model)

}
carDescription(name){

    console.log(name," car is very nice")
}


}
//object
let maruti =new Car("veganor",200000,25,"maruti sedan")
maruti.carDescription("maruti")
// console.log("name",maruti.name)
// console.log("price",maruti.price)
// console.log("milage",maruti.milage)
// console.log("model",maruti.model)
let hundai =new Car("i20",200000,25,"i20 sports")
// hundai.carDescription("hundai")
// console.log("name",hundai.name)
// console.log("price",hundai.price)
// console.log("milage",hundai.milage)
// console.log("model",hundai.model)
