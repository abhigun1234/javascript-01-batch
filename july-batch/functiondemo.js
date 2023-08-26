// function defination
// function hello(str){

//     var a=0;
//     let b=0;
//     console.log("hello",str)
// }
// // calling
// hello('abhishek',a,b)

// // var let  es6 var es5

// for (let i=0;i<10;i++){

//     console.log("i==",i)
// }
// console.log("i==",i)

// const i=0;

// i=1;
// console.log("i==",i)
// hello()
// function hello(){

//     console.log("hello")
// }

// es6 fat arrow 
// const  hello=(num)=>{
//    return num ** 2
//  }
// madam

// hello('abhishek')


// var a=true;//primitive types
// var b={name:"ravi"}// objects 

// function checkByvalOrRef(arg1,arg2){
//     arg1=false;
//     arg2.name="kavi"
//     console.log("value of a ",arg1)
//     console.log("value of b ",arg2)
// }


// checkByvalOrRef(a,b)
// console.log("value of a ",a)
// console.log("value of b ",b)
// es6 
// =>  

// var hello= (str)=> {

// console.log("hello",str)
// }

// hello('abhi')

// input es6 fat arrow calculate the squere of the no and check no is prime

// array [] 

// var person=["abhi",12,{"name":""}]
// var persons=[{"id":1,"first_name":"Bernard","last_name":"Pariso","email":"bpariso0@ocn.ne.jp","gender":"Male"},
// {"id":2,"first_name":"Keenan","last_name":"Cann","email":"kcann1@blogtalkradio.com","gender":"Male"},
// {"id":3,"first_name":"Isa","last_name":"Mangin","email":"imangin2@spotify.com","gender":"Male"},
// {"id":4,"first_name":"Karoly","last_name":"Pinsent","email":"kpinsent3@skyrock.com","gender":"Female"},
// {"id":5,"first_name":"Farrel","last_name":"Guidera","email":"fguidera4@uol.com.br","gender":"Male"},
// {"id":6,"first_name":"Renee","last_name":"Bentjens","email":"rbentjens5@gov.uk","gender":"Female"},
// {"id":7,"first_name":"Delia","last_name":"Curgenven","email":"dcurgenven6@zimbio.com","gender":"Female"},
// {"id":8,"first_name":"Mil","last_name":"Chyuerton","email":"mchyuerton7@so-net.ne.jp","gender":"Female"},
// {"id":9,"first_name":"Dacie","last_name":"Cheeke","email":"dcheeke8@sitemeter.com","gender":"Female"},
// {"id":10,"first_name":"Tobie","last_name":"Caldwell","email":"tcaldwell9@hubpages.com","gender":"Male"},
// {"id":11,"first_name":"Irina","last_name":"Denk","email":"idenka@netlog.com","gender":"Female"},
// {"id":12,"first_name":"Garreth","last_name":"Eshmade","email":"geshmadeb@wufoo.com","gender":"Male"},
// {"id":13,"first_name":"Finley","last_name":"Tooker","email":"ftookerc@google.cn","gender":"Male"},
// {"id":14,"first_name":"Vassily","last_name":"Dunlea","email":"vdunlead@va.gov","gender":"Male"},
// {"id":15,"first_name":"Free","last_name":"Boole","email":"fboolee@sphinn.com","gender":"Male"},
// {"id":16,"first_name":"Evyn","last_name":"Denne","email":"edennef@fc2.com","gender":"Male"},
// {"id":17,"first_name":"Kayle","last_name":"Kavanagh","email":"kkavanaghg@behance.net","gender":"Female"},
// {"id":18,"first_name":"Brion","last_name":"Sproson","email":"bsprosonh@msu.edu","gender":"Male"},
// {"id":19,"first_name":"Cathee","last_name":"Hayball","email":"chayballi@ca.gov","gender":"Female"},
// {"id":20,"first_name":"Marcella","last_name":"Huster","email":"mhusterj@weibo.com","gender":"Female"},
// {"id":21,"first_name":"Christopher","last_name":"Shambrooke","email":"cshambrookek@narod.ru","gender":"Male"},
// {"id":22,"first_name":"Maryjane","last_name":"Engall","email":"mengalll@washingtonpost.com","gender":"Female"},
// {"id":23,"first_name":"Durward","last_name":"Arkley","email":"darkleym@gnu.org","gender":"Polygender"},
// {"id":24,"first_name":"Ganny","last_name":"Restill","email":"grestilln@discuz.net","gender":"Male"},
// {"id":25,"first_name":"Grady","last_name":"Fasson","email":"gfassono@webs.com","gender":"Non-binary"},
// {"id":26,"first_name":"Hendrik","last_name":"Wadsworth","email":"hwadsworthp@seesaa.net","gender":"Male"},
// {"id":27,"first_name":"Mathilda","last_name":"Perllman","email":"mperllmanq@businesswire.com","gender":"Non-binary"},
// {"id":28,"first_name":"Brendon","last_name":"Beevors","email":"bbeevorsr@so-net.ne.jp","gender":"Male"},
// {"id":29,"first_name":"Venita","last_name":"Eckery","email":"veckerys@va.gov","gender":"Female"},
// {"id":30,"first_name":"Norrie","last_name":"Watkin","email":"nwatkint@time.com","gender":"Male"}]
// //1
// // for(var person of persons){

// //     console.log("person",person.first_name)
// // }
// //2
// for(var i=0;i<persons.length;i++ ){
//     console.log("person",persons[i].first_name)
// }


// arrays method 
// push   
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("sweet lime")
// console.log("fruits",fruits)
// fruits.unshift("Sweet Lime")
// console.log("fruits",fruits)
// fruits.shift()
// console.log("fruits",fruits)
// fruits.splice(0, 2); 
// console.log("fruits",fruits)
// delete fruits; 
// 
// // //foreach
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.forEach((item,index,arr)=>{
// //     console.log("item",item,index) 
// // });

//map and filter
const arr=[1,2,3,5,6]
// const newArr=arr.filter(a=> a%2!=0)
// console.log("newArr",newArr)
// const newArrmap=arr.map(a=> a*a)
//  console.log("newArr",newArrmap)

// var fruits = ["Banana", "Orange", "Apple", "Mango",8];

// fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index) 
// });
// name=prompt("enter name")
// fruits.push("Sweet Lime")
// console.log("after adding element")
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index) 
// });
// fruits.pop()
// console.log("after deleting last element")
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item,index) 
// });

//let ,var ,const

// for(var i=0;i<10;i++){

//     console.log("i",i)
// }
// console.log("i=",i)
// for(let j=0;j<10;j++){

//     console.log("j",j)
// }
// console.log("j",j)

// const i=12;
// console.log("i",i)
// i=34

// for(let i=0 ;i<fruits.length;i++ ){

//     console.log("fruit",fruits[i])
// }
// for(fruit of fruits){
//     console.log("fruit",fruit)
// }
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("SweetLime")//add end of the array
// console.log("111 push fruits",fruits)
// fruits.shift();  //deleting first element of the array
// console.log(" shift fruits",fruits)
// fruits.pop();  // deleting end element of the array
// console.log("pop fruits",fruits)
// fruits.unshift("sweetlime")// adding element in the first element
// console.log("unshift fruits",fruits)
// delete fruits[1]
// console.log("unshift fruits",fruits)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];("push "  add end of the array)
// fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];   
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(3);  
// console.log("fruits",fruits)

//some and every 
// var ages = [22, 3, 9, 0];

// function checkAdult(age) {
//   return age >= 22;
// }

// value=ages.some(checkAdult)
// console.log("value",value)

// var ages = [20, 1, 11, 2];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.some(checkAdult)
// console.log("value",value)
// var fruits = [{fruit:"Banana", fruit:"Orange"},{ fruit:"Apple", fruit:"Mango"}];
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item.fruit,index) 
//     console.log("arr",arr) 
// });
// for( fruit of fruits){
//     console.log("item",item,index) 
// }
// fruits.forEach(item=>{
//     console.log("item",item) 
// });

// personArray=[{name:"riya",age:23},{name:"nikita",age:22}]
// //map and filter
// const arr=[1,2,3,5,6]
// // const newArr=personArray.filter(person=> person.age>18)
// //console.log("newArr",newArr)
// const newArrmap=arr.map(n=> n*n)
//  console.log("newArr",newArrmap)
//rest
// function add(...nums){

//    console.log("rest",nums)
// }
// var value=add(12,12)
// var value=add(12,12,13)
// var value=add(12,12,13,12,14,23,1222)
// // console.log("value",value)
// rest used in function as a arg
// arr1=[1,2,3]
// arr2=[2,3,4]
// arr3=[2,3,4,5]
// var arr4=[...arr1,...arr2,...arr3]
// console.log("arr4",arr4)
//  var arr3=arr1.concat(arr2)
// var arr6=arr4.concat(arr3)
// console.log("arr6",arr6)
//  

// products.forEach(callBack)


//  function callBack(item,index,arr){
//     priceArr=[]
//     console.log("item",item.name,item.price,index)
//     priceArr.push(item.price)
//     if(item.price>5000){

//         return true
//     }

//  }

//filter method 
// const  numbers =[1,2,3,4,5,6,7,8,9,10]
// const even=numbers.filter(isEven)
// function isEven(value){
//     return value % 2===0;
// }
// console.log(even)
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x ** 2);

// console.log(map1);
// expected output: Array [2, 8, 18, 32]
// personArray=[{name:"riya",age:23},{name:"nikita",age:22},{name:"nikita",age:12},

// {name:"nikita",age:32}]

// personArray.map(person=>{
//     console.log("person",person.name)
// })
// hoisting
// hello()//calling
// // console.log("a",a)
// function hello(){
// //    var a=10
//     console.log("hello")
// }
// console.log("a",a)
// var a;


//some and every 
// var ages = [22, 3, 9, 0];

// function checkAdult(age) {
//   return age > 22;
// }

// value=ages.some(checkAdult)
// console.log("value",value)

// var ages = [20, 21, 21, 20];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.every(checkAdult)
// console.log("value",value)

//
//filter method 
// const  numbers =[1,2,3,4,5,6,7,8,9,10]
// const even=numbers.filter(isEven)
// function isEven(value){
//     return value % 2===0;
// }
// console.log(even)



// const arr1=[1,2,3,5,6]
// // const newArr=personArray.filter(person=> person.age>18)
// //console.log("newArr",newArr)
// const newArrmap=arr1.map(n=> n*n)
//  console.log("newArr",newArrmap)


//  var fruits = [{fruit:"Banana", fruit:"Orange"},{ fruit:"Apple", fruit:"Mango"}];
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item.fruit,index) 
//     console.log("arr",arr) 
// });

//  const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("sweet lime")
// console.log("fruits",fruits)
// fruits.unshift("Sweet Lime")
// console.log("fruits",fruits)
// fruits.pop()
// console.log("fruits",fruits)
// fruits.shift()
// console.log("fruits",fruits)
// fruits.splice(0,3); 
// console.log("fruits",fruits)
// const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruit.slice(1, 3);
// console.log("citrus",citrus)
// delete fruits; 

// const fruitss = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruitss.indexOf("Orange");
//  console.log("index",index)
// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet");
// console.log("result",result)
//  var fruits = [{fruit:"Banana", fruit:"Orange"},{ fruit:"Apple", fruit:"Mango"}];
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item.fruit,index) 
//     console.log("arr",arr) 
// });

// for(var i=0;i<fruits.length;i++){
//   console.log("fruits",fruits[i])
//   console.log("i",i)

// }
// var data=fruits.forEach(fruit=>{
//     console.log("fruit",fruit)
// })