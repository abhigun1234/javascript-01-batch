const numbers=[1,-1,2,3]
// let  sum =0;
// for (let n of numbers)
//  sum+=n;
// console.log(sum)

numbers.reduce(callBack,0)

function callBack(intial,current){
       console.log("intial",intial)
       console.log("current",current)
    return intial+current
}
//reduce method of the array

// sumNumval=numbers.reduce((intial,current)=>{

//     return intial+current

// },0)
// console.log("sum of the no",sumNumval)


// function sumNum(intial,current){

//     return intial+current

// }





// sumval=numbers.reduce(callbacFunc)
// console.log("sumval",sumval)

// function callbacFunc(intial,current){
//  return intial+current

// }
// sumval=numbers.reduce((intial,current)=>{
//      return intial+current
    
//     },0)
//     console.log("sumval",sumval)