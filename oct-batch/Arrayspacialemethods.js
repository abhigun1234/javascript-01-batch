// map filter reduce
//filter
//productarray

prodArray=[{name:'prod1',price:3000},
{name:'prod1',price:5000},
{name:'prod1',price:4000},
{name:'prod1',price:6000},
{name:'prod1',price:8000}]
// const numbers =[1,-1,2,3]
// const filterd=numbers.filter((value)=>{
//     return value>=0;
// })
// console.log("value",filterd)
//map
// const numbers =[1,-1,2,3]
// // const numberDubble=numbers.map(dubble)
// const numberDubble= numbers.map(dubble)
//   console.log("numberDubble",numberDubble)
// function dubble(value,index ,arr){
//   return value **2;
// }
// console.log(numberDubble)
//reduce
const numbers =[1,2,3,4,5]
const sum=numbers.reduce((previousVal,currentVal)=>{
    console.log("currentVal",currentVal)
    console.log("previousVal",previousVal)
    return currentVal+previousVal
},0)
console.log(sum)
// const numbers=[2,3,4,5,6,7]
// sum=0
//  for (var num of numbers){
//   sum =sum+num

//  }

 console.log("sum of the array",sum)

