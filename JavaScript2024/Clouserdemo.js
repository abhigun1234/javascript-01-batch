function Outer() {
    console.log(myname)
    var name = "Mozilla";
     // name is a local variable created by init
    function inner() {
        var myname='hhhhh'
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    inner();
  }
  Outer();
