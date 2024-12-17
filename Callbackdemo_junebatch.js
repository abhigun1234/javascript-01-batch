// console.log("callback")

function prepareOrder(){
    console.log("piza ready")
    
}

// prepareOrder()

function takeOrder(fun){
    console.log("taking order")
    setTimeout(fun, 4000);
    
}
// callback
takeOrder(prepareOrder)