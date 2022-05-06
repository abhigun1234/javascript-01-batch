class Employee{

    constructor(_name,phone_no,address){
      this.name=_name;
      this.phone_no=phone_no;
      this.address=address;
      
    }

}
var empArr=[]
for(var i=0;i<2;i++){
    var name_1=prompt("enter emp name ")
    var phone_no=prompt("enter phone no")
    var address=prompt("enter address ")
    let e1=new Employee(name_1,phone_no,address)
    empArr.push(e1)
}
console.log("empArr",empArr)

