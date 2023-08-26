class GrandParent{

    constructor(){
       console.log(" constructor Parent")

    }
    getParentProprety(){
        console.log("parent property")
    }
    getParentProprety1(){
        console.log("parent property")
    }

}
class Parent extends GrandParent{
    constructor(){
       
        super()
        console.log(" constructor child")
       
    }
    getParentNewProp(){
        console.log("helll")
    }
}
class Child extends Parent{
    constructor(){
       
        super()
        console.log(" constructor child")
       
    }
}
let c1=new Child()

parent Person
getEmailId
setEmaild
getAddress
setAdress
child Student
getMarks
setmarks

