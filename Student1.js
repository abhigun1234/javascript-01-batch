class Person {

    constructor(_email) {
        this.email=_email
        console.log("email",this.email) 

    }
    getemailid() {
        console.log("email",this.email)
    }
    setEmailId(_email) {
        this.email=_email
        console.log(" set parent property")
    }

}

class Student extends Person {
    constructor() {

        super()
        console.log(" constructor student")

    }
    getMarks() {
        console.log("marks get")
    }
   setMarks() {
        console.log("marks set")
    }
}

let s1 = new student("s@gmail.com");
s1.getemailid()