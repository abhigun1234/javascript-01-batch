// class Product{
//    constructor(_id,_name,_price,_description){
//       console.log("constructor called")
//       this.id=_id
//       this._name=_name
//       this.price=_price
//       this.description=_description
//     }

//     sellProduct(){

//     }
//     buyProduct(){

//     }
//     getProductName(){
//         console.log("product name",this._name)
//     }
//     setProductName(name){
//         this._name=name
//     }
// }
// var name=prompt("enter product name")
// var price= prompt("enter product price")
// var description=prompt("enter product description")
// var id=prompt("enter product id")
// // object
// let p1= new Product(id,name,price,description)
// let p2= new Product(id,name,price,description)
// var products=[]
// console.log("name",p1._name)
// p1.getProductName()
// p1.getProductName()
// products.push(p1)
// products.push(p2)
// console.log("products",products)
class Parent{

    constructor(){
       console.log(" constructor Parent")

    }
    getParentProprety(){
        console.log("parent property")
    }

}
class Child extends Parent{
    constructor(){
       
        super()
        console.log(" constructor child")
       
    }
}
class Child1 extends Child{
    constructor(){
       
        super()
        console.log(" constructor child")
       
    }
}

let c1=new Child()
let c2=new Child1()
c1.getParentProprety()
c2.getParentProprety()

