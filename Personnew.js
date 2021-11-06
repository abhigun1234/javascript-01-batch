class Person{

 
    constructor(name,_phone_no){
        let arrayEmp=[]
        arrayEmp.push(name)
        console.log("name",_name)
        console.log("phone_no",_phone_no)
        this.arrayEmp.push

    }
    // getPersonInfo

    getPersonInfo(){
         console.log("name",this.name)
        return this.name
    }
    setName(_name){

     this.name=_name
    }
}


//object
let p1=new Person('abhishek','8989089089')
let name1=p1.getPersonInfo()
console.log("name",name1)

//p1.setName('ravi')
let name2=p1.getPersonInfo()
console.log("name",name2)
let p2=new Person('vikas','8989089089')
console.log(p1.name)

