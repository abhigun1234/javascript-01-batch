console.log("hello")
 //this is a regualr expresion
//let regx= /Abhi/i;
//exex functtion will return  an array for match or null for no match

// prompt(;)
data=prompt('enter data')
let regx= /data/i;//
str='hello mukesh how are you are you enjoying mearn stack  would like to learn any thing else'
// console.loenjog(regx.source)
// let result=regx.exec(str)
// console.log(result)
// console.log(result.input)
// console.log(result.index)

//test returns true or false 
// let result1 =regx.test(str)
// console.log(result1)

let result2 =str.match(regx)
console.log(result2)
