console.log('Before')
getUser(1,callback)
function callback(user){
    console.log("User",user)
    getAddress(user.userName,(address=>{
        console.log("adress",address)

        getDetailAddress(address)
    }))
}
console.log('after')
function getUser(id,callback){
    setTimeout(()=>{

        console.log('Reading a user from a database ----')
        callback({id:1,userName:'abhi'})
    },2000)
    
}

function getAddress(username,callback){
    setTimeout(()=>{
        callback( ["mumbai","pune","bangluru"] )
    })
    
}
function getDetailAddress(address,callback){

  setTimeout(()=>{

   callback(["thane east building y","thane east building y"]) 
  })
}

// getUsername
//getAddress
//getDetaiAddress

// function getUserName(id){
//  return {userId:1,name:"ravi"}
// }
// function getAddress(name){
//     return ['mumbai','pune','bangore']
// }
// function getDetailAddress(city){
//   return ["matunga east building t near by stadium"]
// }
// //1
// user=getUserName()
// console.log("user",user)
// //2
// city=getAddress(user.name)
// console.log("city",city)
// //3
// detailAddress=getDetailAddress(city[0])
// console.log("detailAddress",detailAddress)
