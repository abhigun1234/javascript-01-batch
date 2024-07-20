function calculateTotalEmi(){
    
    var num1=Number(document.getElementById('creditcard').value)
    var num2=Number(document.getElementById('carloan').value)
    var num3=Number(document.getElementById('homeloan').value)
    var num4=Number(document.getElementById('personal').value)
    var result=num1+num2+num3+num4
    console.log("result",result)
    document.getElementById('lblName').innerHTML = result;
}