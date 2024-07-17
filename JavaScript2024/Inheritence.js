class GrandParnt{

    constructor(){

        console.log("constructor called of granparent")
    }
    grandParentProperty(){

        console.log("grandparent property")
    }
}

class Parent extends GrandParnt{

    constructor(){
        console.log("parent constructor")
        super()
    }
    patentProperty(){

        console.log("parent prpoerty ")
    }
}

class Child extends Parent{


    constructor(){

        super()
        console.log("child constructur")
    }
}

let c1=new Child()
c1.grandParentProperty()