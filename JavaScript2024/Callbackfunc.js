function order(food,fun){

    console.log("order is prepraing wait",food)
    
    setTimeout(completed,3000)
   // fun()
}

function completed(){

    console.log("piza is ready")
}

// callback
prompt("food")
order(food,completed)