class Person{
// member function wchich is used to intilaze the data member of the class
    constructor(_id,_phone_no,_name){

        //this represents current object of the class
        
        this.id=_id
        this.phon_no=_phone_no
        this.name=_name
        console.log("construstor called")
        console.log("id",_id)
        console.log("phone_no",_phone_no)

    }
    getPersonData(){
       console.log("name",this.name)
       console.log("name",this.phon_no)
    }

}

//object
let p1=new Person(1,'4565566766',"riya")

let p2=new Person(2,'978979789',"abhishek")
p1.getPersonData()
p2.getPersonData()


