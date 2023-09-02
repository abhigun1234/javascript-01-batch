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


function bye(str){

    console.log("bye",str)
}
function hello(myfunc){
  
    return function (){
      console.log("hello")
    }

}


hello(bye)

