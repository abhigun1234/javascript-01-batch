async function asynAwait(){

// promise 1
let p1=new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve("done p1")
})
},1000)
let p2=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("done p2")
    })
    },1000)

    let p1wait= await p1;
    let p2wait= await p2;
    return [p1wait,p2wait]
}
result=asynAwait()
console.log("result",result)