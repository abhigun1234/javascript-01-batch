// let var
// for(var i=0;i<10;i++){
//     console.log("i==",i)
// }//0,9
// console.log("outside the value of i==",i)//value 10 
// for(let j=0;j<10;j++){
//     console.log("j==",j)//0,9
// }
// console.log(" outside the value of  j==",j)//undifined

// const a=12;
// //define the value 
// console.log("a",a)
// a=23
// console.log("a",a)
// block of structue wchich can perform a perticular task

// function hello(a,obj){

//      a=12
//      obj.name='ravi'
//     console.log("a==",a)
//     console.log("obj==",obj)
// }

// var a=10
// obj={name:'abhi'}
// hello(a,obj)
// console.log("obj==",obj)
// console.log("a==",a)

// java script is call

// rest spread 

// arr1=[1,2,3,4]
// arr2=[2,3,4]

// // arr=arr1.concat(arr2)
// // console.log("arr",arr)
// // es6 spread opreator
// arr=[...arr1,...arr2]
// console.log("arr",arr)

// rest
//complex
function add(...arr){
    // console.log("add",arr)
    // console.log("a",a)
    // console.log("b",b)
    var sum=0
    for(var no of arr){
        sum=sum+no

    }
}

add(4,4,5,6)






