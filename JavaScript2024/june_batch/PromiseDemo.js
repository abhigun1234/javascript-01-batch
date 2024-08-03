let p1=new Promise((resolve,reject)=>{

setTimeout(()=>{


    //resolve("data retrived")
    reject("error during data")
},2000)

})
let p2 =new Promise((resolve,reject)=>{
    resolve("ready")
})
p1.then(res=>{

    console.log("response recived",res)

    p2.then(res=>{

    }).catch(error=>{

        
    })

}).catch(error=>{
    console.log("error",error)
})


