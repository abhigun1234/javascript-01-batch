// while do wjile for for each for in


// var a=0;
// var b=0
// while (a<10){
//     console.log(" while loop a",a)
//     a++
// }
// do{
//     console.log(" do while loop b",b)
//     b++
// }while(b<10)


// // for loop 
// for(var i=0;i<10;i++){
//   console.log(" for loop i==",i)  
// }

// array 
// 

// var fruits=["Mango","Banana","Orange","Chekoo","Watermelon"]

// for(var fruit of fruits){
//     console.log("fruit==",fruit)    
// }
//{}
// personArr=[{name:"ABHI",age:23},{name:"ABHI",age:23},{name:"kBHI",age:23},{name:"mBHI",age:23}]
// for(person of personArr){
//     console.log("name",person.name)
//     console.log("age",person.age)
// }

arr1=[1,2,3]
arr2=[3,4,5]
arr3=[...arr1,...arr2]
console.log("arr3",arr3)


function add(c,a,b,g,...arr){


console.log("arr",arr)
console.log("g",g)
console.log("a",a)
}

add(2,2,3)