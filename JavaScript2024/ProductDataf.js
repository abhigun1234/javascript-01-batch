class Product{

    constructor(_name,_price){
       this.name=_name
       this.price=_price
        console.log("constructor called")
    }
    //geter
    getName(){
      return this.name
    }
    setName(_name){
     this.name=_name
    }
    
}



// create the object of the class 
let p1=new Product("bat","1234")
console.log("name is ",p1.name)
console.log("price is ",p1.price)
let p2=new Product("ball","123")
console.log("name is ",p2.name)
console.log("price is ",p2.price)
p1.setName("football")
console.log("name is ",p1.name)
console.log("name",p2.getName())