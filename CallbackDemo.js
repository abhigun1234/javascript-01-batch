//callback

function one(asss){// fun=two
    asss()
    console.log("one called")
    
}

function two(){

    console.log("two called")
}
//callback
one(two)
