class Product {


    getProductDetails(){

        console.log("product details")
    
    }
}
class Custumer extends Product{

    getCustumerDetails(){

        console.log("customer details")
    }
}

let cust=new Custumer()
cust.getProductDetails()