function outerFunc(){
   //outter func var
    var i=10;
    function innerFunc(){
// closue
      var j=12
        console.log(" outer var i==",i)


    }
    innerFunc()
}

outerFunc()