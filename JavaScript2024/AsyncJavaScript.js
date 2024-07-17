// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall();
  

// const p1=new Promise((resolve,reject)=>{

//     //console.log("")
//         setTimeout(()=>{
//   //resolve(13)
//       reject(new Error('message'))
//       },2000)
//   })
  
//   p1.then(result=>{
//     console.log("result",result)
//   }).catch(err=>{
//     console.log("err",err)
//   })

// const p1=new Promise((resolve,reject)=>{
//  setTimeout(()=>{
// peronData=[{"id":1,"first_name":"Dario","last_name":"Wyard","email":"dwyard0@wisc.edu"},
// {"id":2,"first_name":"Ethel","last_name":"Wraggs","email":"ewraggs1@wordpress.org"},
// {"id":3,"first_name":"Ronnica","last_name":"Andrus","email":"randrus2@nationalgeographic.com"},
// {"id":4,"first_name":"Brose","last_name":"Barry","email":"bbarry3@ameblo.jp"},
// {"id":5,"first_name":"Alameda","last_name":"Ausiello","email":"aausiello4@addtoany.com"},
// {"id":6,"first_name":"Powell","last_name":"Hallahan","email":"phallahan5@msn.com"},
// {"id":7,"first_name":"Blondie","last_name":"Pickles","email":"bpickles6@noaa.gov"},
// {"id":8,"first_name":"Davita","last_name":"Amey","email":"damey7@jalbum.net"},
// {"id":9,"first_name":"Gabbie","last_name":"Imos","email":"gimos8@prweb.com"},
// {"id":10,"first_name":"Bria","last_name":"Fonzo","email":"bfonzo9@macromedia.com"}]

//     resolve(peronData)
//   //  reject(new Error('error during data fetching'))
//  },2000)
// })

// p1.then(result=>{
//     console.log("result",result)
// }).catch(error=>{
//     console.log("error",error)
// })





// const p1=new Promise((resolve,reject)=>{

//     //console.log("")
//         setTimeout(()=>{
//   //resolve(13)
//       reject(new Error('message'))
//       },2000)
//   })
  
//   p1.then(result=>{
//     console.log("result",result)
//   }).catch(err=>{
//     console.log("err",err)
//   })



// 1 step 

const p1 =new Promise((resolve,reject)=>{

   setTimeout(()=>{
        
       //resolve([{"name":"abhi"},{"name":"ram"}])
    reject(new Error('database connectivity issue'))

   },2000)

})


p1.then(res=>{

    console.log("response",res[1].name)
}).catch(e=>{
    console.log("error",e)
})










