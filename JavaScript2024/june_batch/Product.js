class Product
{



    constructor(_name){
        this.name=_name
      console.log('hello constructor',this.name)
      
    }
getName(){
return "hello"
}
setName(_name)
{
    this.name=_name

}
}

class Customer extends Product{

    constructor(){
      super()
    }
}

// /// create teh object

// let p1=new Product("shoes")
// console.log("name",p1.name)
// p1.setName("bat")
// console.log("name",p1.name)

let c1=new Customer()
console.log(c1.getName())
