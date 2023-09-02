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


const p1=new Promise((resolve,reject)=>{

  //console.log("")
      setTimeout(()=>{
//resolve(13)
    reject(new Error('message'))
    },2000)
})

p1.then(result=>{
  console.log("result",result)
}).catch(err=>{
  console.log("err",err)
})