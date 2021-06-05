class Person{

  constructor(name,id){
     const personArr=[]
     personArr.push(name)
     this.name=name
     this.id=id
     console.log("personarr",personArr)
  
  }
  
  walk(){
  
     console.log("walking")
  }
  getName(){

    return this.name
  }
  getId(){

    return this.id
  }
  
  // personInfo(name,id,phone_no){
  //   let personArr=[]
  
    
  //   personArr.push(name)
  //   personArr.push(id)
  //   personArr.push(phone_no)
  //  return personArr
  // }
  
  
  }
  var p1=new Person('jyoti',1)
  var p2=new Person('abhishek',3)
  var p3=new Person('archit',4)
  
  var mname=p3.getName()
  var id=p3.getId()
  console.log("name",mname)
  console.log("id",id)