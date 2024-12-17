// function myDisplayer(some,myfunc) {
//     console.log("some",some)
//     myfunc()
//   }
//   function hello(){

//     console.log("hello")
//   }
//   function myCalculator(num1, num2, myCallback,fun) {
//     let sum = num1 + num2;
//     myCallback(sum,fun);
//   }
  
//   myCalculator(5, 5, myDisplayer,hello);


// function bye(str){

//     console.log("bye",str)
// }
// function hello(myfunc){
  
//     return function (){
//       console.log("hello")
//     }

// }


// hello(bye)

//  function hello(fun){
//   console.log("hello")
//   fun()// calling
//  }

//  function bye(){
//   console.log("bye")
//  }

//  hello(bye) //callback

// setInterval(callBack,1000)
// //setTimeout(callBack,5000)
// //console.log("ghhhhh")
// function callBack(){
//     console.log("hello")
// }
//
person=[1,"hello",{"name":"manu"}]
console.log("person",person[2].name)
personArray=[{"id":1,"first_name":"Marne","last_name":"Paiton","email":"mpaiton0@webs.com","gender":"Female"},
{"id":2,"first_name":"Janette","last_name":"Chittleburgh","email":"jchittleburgh1@delicious.com","gender":"Female"},
{"id":3,"first_name":"Erinn","last_name":"Hedley","email":"ehedley2@ftc.gov","gender":"Female"},
{"id":4,"first_name":"Karlotte","last_name":"Nudd","email":"knudd3@umn.edu","gender":"Genderqueer"},
{"id":5,"first_name":"Kali","last_name":"Gleder","email":"kgleder4@desdev.cn","gender":"Bigender"},
{"id":6,"first_name":"Estella","last_name":"Ingleson","email":"eingleson5@linkedin.com","gender":"Female"},
{"id":7,"first_name":"Locke","last_name":"Tuttiett","email":"ltuttiett6@amazon.co.jp","gender":"Male"},
{"id":8,"first_name":"Susette","last_name":"Matuszak","email":"smatuszak7@ibm.com","gender":"Female"},
{"id":9,"first_name":"Dorine","last_name":"Bridel","email":"dbridel8@naver.com","gender":"Female"},
{"id":10,"first_name":"Uri","last_name":"Cotterrill","email":"ucotterrill9@wordpress.com","gender":"Male"}]

for(let i=0;i<personArray.length;i++){
    console.log("first_name",personArray[i].first_name)
}
