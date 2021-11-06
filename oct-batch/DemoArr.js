//filter map reduce methods

//filter 
 myArr=[1,2,3,4,5,6]

const filterdArry=myArr.filter((value,index,arr)=>{ return value>3})

// function callback(value,index,arr){

//     // console.log("value",value)
//     // console.log("index",index)
//     // console.log("arr",arr)
//     return value>3
// }
console.log("filterdArry",filterdArry)
