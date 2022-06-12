// var ages = [32, 33, 20, 40];

// function checkAdult(age) {
//     console.log("age",age)
//   return age >= 18;
// }

// value=ages.every(checkAdult)
// console.log("value",value)

// var ages = [3, 1, 11, 2];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.some(checkAdult)
// console.log("value",value)

//map and filter
// const arr=[1,2,3,5,6]
// for(a of arr){

// }
// for(i=0;i<arr.length;i++){


// }
// arr.map(callback)
// function callBack(a){
//     console.log("a",a)
// }
// const newArr=arr.filter(a=> a%2!=0)
// console.log("newArr",newArr)
// const newArrmap=arr.map(callBack)
// function callBack(){
//     console.log("callback")
// }
//  console.log("newArr",newArrmap)
// for eaech
// fruits=["mango","banana","apple","orange","sweet lime"]
//  fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index)
//  })


//  function callBack(item,index,arr){

//     console.log("item",item,index)
//  }


//   function hello(fun){

//     console.log("hello")
//     fun()
//   }
//   var bye =()=>{
//     console.log("bye")
//   }

//   hello(bye)

class Car {

    constructor(_name, _model, _price, _desription) {
        console.log("name", _name)
        console.log("name", _model)
        console.log("name", _price)
        console.log("name", _desription)
        this.name =_name
        this.model =_model
        this.price =_price
        this.desription =_desription
            console.log("constructor called")
    }
}
let c1 = new Car("Maruti", "swift", "600000", "red")
console.log("name", c1.name)
console.log("name", c1.model)
console.log("name", c1.price)
console.log("name", c1.desription)
let c2 = new Car("Hundai", "creta", "2000000", "white")
console.log("name", c2.name)
console.log("name", c2.model)
console.log("name", c2.price)
console.log("name", c2.desription)