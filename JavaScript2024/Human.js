class Human{
constructor(name){
    this.name=name
    console.log("hello",name)
}

    getDetils(){
        console.log("get details",this.name)

    }
}

let priyansh=new Human("priyansh")
priyansh.getDetils()