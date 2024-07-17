function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

// function Outer(){
// var  name='rajesh'   
// console.log("date",date)
// function inner(){
//     date='6-2-23'
//     console.log("name",name)
// }
// inner()
// }

// Outer()