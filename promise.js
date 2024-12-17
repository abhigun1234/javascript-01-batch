// const p=new Promise((resolve ,reject)=>{
//     // resolve 
//     //reject
//     setTimeout(()=>{
//       resolve(1)
//     //reject(new Error('message'))
//     },2000)
// })
// p.then(result=>{
//     console.log("Result",result)
// }).catch(error=>{

// console.log("error",error)
// })


// const p1=new Promise((resolve,reject)=>{

//   //console.log("")
//       setTimeout(()=>{
//   resolve("done")
//     //reject(new Error('message'))
//     },2000)
// })
// p1.then(result=>{
//   console.log("result",result)
// }).catch(error=>

//   console.log("result",result)
// )
// p1.then(result=>{
//   console.log("result",result)
// }).catch(err=>{
//   console.log("err",err)
// })

const p1 =new Promise((resolve ,reject)=>{

     setTimeout(()=>{
      //resolve("bye")
    reject(new Error('message'))
    },2000)
})

p1.then(res=>{
  console.log("res",res)
}).catch(error=>{
  console.log("error",error)
})
// create a promise and send the array of object as a reolve and throw erro messge data not found