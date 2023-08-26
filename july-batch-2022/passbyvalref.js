function passValRef(a1,b1){
a1=13
b1.name='ram'
console.log("a1",a1)
console.log("b1",b1)
}
a=12
b={name:"raju"}
passValRef(a,b)
console.log("a",a)
console.log("b",b)