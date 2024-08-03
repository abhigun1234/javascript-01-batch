// let puneWhether=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("25 degree")
//     },1000)

// })

// let delihiWhet=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("25 degree")
//     },1000)

// })

// puneWhether.then(res=>{
//     console.log("hello",res)
// })
  async function whetherReport(){
    let puneWhether=new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("25 degree")
        },1000)
        
    
    })
    let report = await whetherReport 
  }
  
  whetherReport()


 
    // puneWhether.then(res=>{
    //     console.log("res")

    // })
 //let reoport = await whetherReport
 console.log("report",reoport)   
 //return reoport 



//let report =whetherReport()
console.log("report",report)


// // puneWhether.then(res=>{
// //     console.log("hello",res)
// // })
// const data=whetherReport()
// console.log("data",data)
