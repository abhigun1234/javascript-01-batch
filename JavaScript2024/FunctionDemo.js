
// var a=10;
// var flag=true;
// var b={name:'abhishek'}
// // defniation
// function hello(a,b,flag){
//       a=25
//       flag=false
//       b.name='ramesh'
    
// }

// // hello calling
// console.log("a==",a)
// console.log("b==",b)
// console.log("flag==",flag)
// hello(a,b,flag)
// console.log("a==",a)
// console.log("b==",b)
// console.log("flag==",flag)
// //call by value and call vy refrence
// function is returning value

// var no1=Number(prompt("enter first no"))
// var no2=Number(prompt("enter secomd no"))

// function add(no1,no2){
//     return no1+no2
// }

// //add call
// var result=add(no1,no2)
// console.log("result",result)
// function add(){
//     alert("calc worked")
//     // var num1=Number(document.getElementById('num1').value)
    
//     // var num2=Number(document.getElementById('num2').value)
    
//     var num1=Number(document.getElementById('num1').value)
//     var num2=Number(document.getElementById('num2').value)
//     var result=num1+num2
//     console.log("result",result)
//     document.getElementById('lblName').innerHTML = result;
//     }

// function hello(fun){

//     console.log("hello")
//     fun()
// }
// var bye =(str)=>{
//     console.log("bye",str)
// }
// bye("mahesh")


// function callBack(){
//     console.log("FIRST CUSTOMER")
// }
// function callBack1(){
//     console.log("SECOND CUSTOMER")
//  }
// setTimeout(callBack,5000)

// setTimeout(callBack1,1000)

// setInterval(callBack, 1000);

// function callBack(){1
//     console.log("hello")
// }

// function getData(callback){

//     // 
//     callBack()
// }

// function callBack(){

//     // operation 
// }

// getData(callBack)


// const  numbers =[,2,3,4,5,6,7,8,9,10]
// const numberDubble= numbers.map((item,index,arr)=>{
//     console.log(item)
//     console.log(index)
//     console.log(arr)
//     return item**2
//   })
//   console.log("numberDubble",numberDubble)

user=[
    {"id":1,"first_name":"Gannon","last_name":"Bunclark","email":"gbunclark0@businesswire.com","gender":"Male"},
{"id":2,"first_name":"Hillel","last_name":"Woodvine","email":"hwoodvine1@skyrock.com","gender":"Male"},
{"id":3,"first_name":"Ettie","last_name":"Belk","email":"ebelk2@nbcnews.com","gender":"Female"},
{"id":4,"first_name":"Durward","last_name":"Elstob","email":"delstob3@nhs.uk","gender":"Male"},
{"id":5,"first_name":"Rollo","last_name":"Haggath","email":"rhaggath4@yelp.com","gender":"Male"},
{"id":6,"first_name":"Penni","last_name":"Ballham","email":"pballham5@msu.edu","gender":"Female"},
{"id":7,"first_name":"Batholomew","last_name":"Sunter","email":"bsunter6@e-recht24.de","gender":"Male"},
{"id":8,"first_name":"Hinze","last_name":"Wederell","email":"hwederell7@cdc.gov","gender":"Male"},
{"id":9,"first_name":"Klarika","last_name":"Hammersley","email":"khammersley8@state.gov","gender":"Female"},
{"id":10,"first_name":"Maurits","last_name":"McKibbin","email":"mmckibbin9@ihg.com","gender":"Male"}]

// // // filter
maleUser=user.filter((element)=>{
    console.log("first_name",element.first_name)
    return element.gender==='Female'
  })
//   console.log("maleUser",maleUse)
// // var callback=(element)=>{
// //   return element.gender==='Male'
// // }
// console.log("maleUser",maleUser)

