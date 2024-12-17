var a=false;
var b={id:false}// object
function myfunc(x,y){
x=true
y.id=true
console.log("inside x=",x)
console.log("inside y=",y)
}


myfunc(a,b)
console.log("out a",a)
console.log("out b",b)
// console.log("value of a ",a)
// console.log("value of b ",b)
//rest operator
// function  sum(){
//     var total=0;
//     console.log(arguments)
//     for(var a=0;a<arguments.length;a++){
//         console.log("a",a)
//     }
// }
// sum(1,2,3,6)
// function  sum(...arr){
//     var total=0;
//     console.log(arr)
//     for(var a=0;a<arr.length;a++){
//         console.log("a",a)
//     }
// }

// sum(1,2,3,4)
// var arr1=[2,3,4,5]
// var arr2=[2.4,5,arr1]
// console.log("arr2",arr2)
// myString1="helo \n how are you"
// console.log('myString1',myString1)
// myString=`helo 
// how bye 
// are ffff
// ddd

// you`
// console.log(myString)
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3)
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 4);

// console.log(result);
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]




// function hello(){


//     console.log("hello")
// }

// hello()
//anonymus function
// var hello=function (){

//     console.log("hello")
// }

// hello()
//es6 fat arraow
// var hello=(a)=>{

//     console.log("hello")

// }

// hello(2)
//  factorial of the no  and peint the table of the same no with es6 fat arrow function also check the no 
//is even or odd