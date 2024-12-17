class GrandParent{

    constructor(){
       console.log(" constructor grand Parent")

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
        console.log(" constructor parent")
       
    }
    getParentNewProp(){
        console.log("helll")
    }
}
class Child extends Parent{
    constructor(){
       
        super()
        console.log("  child")
       
    }
}
let c1=new Child()
c1.getParentNewProp()
// // 
// parent Person
// getEmailId
// setEmaild
// getAddress
// setAdress
// child Student
// getMarks
// setmarks

