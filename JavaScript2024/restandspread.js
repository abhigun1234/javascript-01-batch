function sum(x, y, z,m) {
  console.log("x",x)
  console.log("y",y)
  console.log("z",z)
  console.log("m",m)
    return x + y + z;
  }
  
  const numbers = [1, 2, 3,4];
  
  console.log(sum(...numbers));
  // Expected output: 6


  // Use rest to enclose the rest of specific user-supplied values into an array:
// function myBio( ...otherInfo) { 
//   console.log("otherInfo",otherInfo)
//     return otherInfo;
//   }
  
//   // Invoke myBio function while passing five arguments to its parameters:
//   myBio( "CodeSweetly", "Web Developer", "Male");
//   myBio( "CodeSweetly", "Web Developer", "Male","ghhhh");
//   myBio( "CodeSweetly", "Web Developer", "Male","ghhhh",'llll');
  
//   // The invocation above will return:
//   ["CodeSweetly", "Web Developer", "Male"]