
class Person{

    constructor(name,address){

       

        this.name=name
        this.address=address
        var productArry;
        // productArry.push({name:'',price})
    }
    hello(){
        console.log("hello")
    }

}
class Custumer extends Person{

    constructor(){
      super()
    }
custumerDetails(){
    console.log("hello custumer")
}
}

let cust=new Custumer()

cust.hello()
cust.custumerDetails()

// var mname=prompt('enter person name')
// var address=prompt('enter person address')

// // obj
// let p1=new Person(mname,address)
// p1.hello()
// console.log('name entered by user ',p1.name)
// console.log('address entered by user',p1.address)