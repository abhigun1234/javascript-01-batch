function prepareOrder(fun,cust){

    console.log("order  preparing of ",cust)
    setTimeout(fun,3000)
}

function foodReady(){
    console.log("food ready")
}


prepareOrder(foodReady,"custumer 1 order")
prepareOrder(foodReady,"custumer 2 order")

(2,3)