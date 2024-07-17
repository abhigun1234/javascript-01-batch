// str="hello you how are you you "
// // length
// console.log("length of the string",str.length)
// //upppercase 
// // lowercase
// //includes
// var val =str.includes("how")
// console.log("val",val)
// //stratsWith
// var val=str.startsWith("ell")
// console.log("val",val)
// var val=str.endsWith("you")
// console.log("val",val)

// //serach
// var val=str.search("you")
// console.log("val",val)
// // match
// // str.match(/ain/);
// console.log("val",str.match(/you/));
// //indexOf
// var val=str.indexOf("you")
// console.log("val",val)
// var val=str.lastIndexOf("you")
// console.log("val",val)
// var val=str.replace("you","me")
// console.log("val",val)
// var val=str.replace(/you/g,"me")
// console.log("val",val)
// var val=str.trim()
// console.log("val",val)
// let text = "Hello world!";
// let result = text.substring(1, 4);
// console.log("result",result)

// str="Hello how are you guys welcome to the javascript world you"
// console.log(str[0])
// str[0]='j'
// console.log(str.length)
// // imutable 
// var val =str.toLowerCase()
// console.log(val)
// var val =str.toUpperCase()
// console.log(val)
// var val =str.includes("6666")
// console.log("val",val)
// var val=str.startsWith("hello")
// console.log("val",val)
// var val=str.endsWith("Hello")
// console.log("val",val)
// if(str.startsWith && str.endsWith){

// }

// var val=str.search("you")
// console.log("val",val)
// var val=str.indexOf("you")
// console.log("val",val)

// var val=str.lastIndexOf("you")
// console.log("val",val)
// var val=str.replace("you","me")
// console.log("val",val)
// str=' hello   '
// if(str.trim()=='hello'){


// }


//   var fruits = ["Banana", "Orange", "Apple", "Mango"];

//     console.log("before fruits",fruits)
//  fruits.shift();  
//  console.log("after fruits",fruits)
//   fruits.unshift("lemon");  
//   console.log("after fruits",fruits)
// fruits.push("lemon");  
// console.log("after fruits",fruits)

// fruits.pop();  
// console.log("after fruits",fruits)
// console.log("before fruits",fruits)
// fruits.push("lemon");  
// console.log("after fruits",fruits)
//  console.log("before fruits",fruits)
//  fruits.unshift("lemon");  
//  console.log("after fruits",fruits)
//  console.log("before fruits",fruits)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item)
//     console.log("index",index)
//     console.log("arr",arr)
// });


// string
var str='india is a great great country'
// console.log("str",str)
// console.log("str",str[0])
// str[0]='b'
// console.log("length",str.length)
// console.log("length",str.toLowerCase())
// console.log("length",str.toUpperCase())
// var val =str.includes("ddddd")
// console.log("val",val)
//  var val =str.startsWith("in")
// console.log("val",val)
//  var val =str.endsWith("country")
// console.log("val",val)
//  var val =str.search("great")
// console.log("val",val)
 
//  console.log("val",str.match('great'));
// console.log("length of the string",str.length)
// var val=str.lastIndexOf("great")
// console.log("val",val)
// var str='india is a great great country'
//  var val=str.replace("great","beautiful")
//  console.log("val",val)

// var str=" hello "
// console.log("length",str.length)
// console.log("str",str)
// console.log("str",str.trim())

// array
// var arrayData=['abhi',89,{name:"abhi"}]
// console.log("arrayData",arrayData[0])
// console.log("arrayData",arrayData[1])
// console.log("arrayData",arrayData[2])
//   var fruits = ["Banana", "Orange", "Apple", "Mango"];

// var fruits=["apple","banana","orenge","Water Milon","Musk Milon"]
// fruits.pop();  
// console.log("after pop",fruits)

// fruits.push("lemon");  
// console.log("after push",fruits)
 
//  fruits.unshift("lemon");  
//  console.log("after fruits",fruits)
//  fruits.shift();  
//  console.log("after fruits",fruits)
//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 2);  
// console.log("fruits",fruits)

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach((item,index,arr)=>{
//     console.log("item",item)
//     console.log("index",index)
//     console.log("arr",arr)
// });
// map filter 
// //map and filter
  const arr=[1,2,3,4,5,6]
  
//  const newArr=arr.filter(a=> a%2===1)
//  console.log("newArr",newArr)
// const newArrmap=arr.map(a=> a*a)
//  console.log("newArr",newArrmap)

// function add(...nums){//2//3

//     console.log("nums",nums)
// }
// add(10,2)
// add(1,2,3)
// add(1,2,3,4,"hello",55)
// arr1=[1,2,3]
// // arr2=[4,arr1]
// // console.log("arr2",arr2)
// arr2=[4,...arr1]
// console.log("arr2",arr2)

// var arr = [{name:'ravi'}, "World",12]  
  
// // destructuring assignment  
// var [first, second,third] = arr;  
  
// console.log(first); // Hello  
// console.log(second); // World  
// console.log(third); // World  
// const p1=new Promise((resolve,reject)=>{

//     //console.log("")
//         setTimeout(()=>{
//     //resolve({name:"abhi"})
//       reject(new Error(' data not found'))
//       },2000)
//   })
// p1.then(res=>{
//   console.log("res",res)
// }).catch(error=>{
//   console.log("error",error)
// })


// some ,every

// map,filter

// var ages = [32, 33, 19, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// value=ages.every(checkAdult)
// console.log("value",value)

// var ages = [3, 1, 1, 2];

// function checkAdult(age) {
//   return age >= 18;
// }
// value=ages.some(checkAdult)
// console.log("value",value)

var myString="Hello how are you"
console.log("mystring",myString.length)
console.log("mystring",myString.toLocaleLowerCase())
console.log("mystring",myString.toLocaleUpperCase())