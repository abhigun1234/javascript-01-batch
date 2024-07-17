// console.log('Before')
// p1=getUser(1)
// p1.then(data=>{
// console.log("data",data)
// }).catch(error=>{
//     console.log("error",error)
// })
// // function callback(user){
// //     console.log("User",user)
// //     getAddress(user.userName,(address=>{
// //         console.log("adress",address)
// //     }))
// // }
// console.log('after')
// function getUser(id){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             console.log('Reading a user from a database ----')
//             resolve({id:1,userName:'abhi'})
//         },2000)
//     })
   
    
// }

// function getAddress(username,callback){
//     setTimeout(()=>{
//         callback( ["mumbai","pune","bangluru"] )
//     })
    
// }

// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//    // alert(result); // 1
//    console.log("result",result)
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     // alert(result); // 2
//     console.log("result",result)
//     return result * 2;
  
//   }).then(function(result) {
  
//     // alert(result); // 4
//     console.log("result",result)
//     return result * 2;
  
//   });