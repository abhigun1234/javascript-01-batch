console.log('Before')


function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            console.log('Reading a user from a database ----')
            resolve([{id:1,userName:'abhi'},
            {id:2,userName:'sabhi'}])
        },2000)
    })
    
}
async function displayUser(){
    const user= await getUser(1) // waiting 
    const address= await getAddress(user.name) // waiting 
    const detailAddress= await getDetailAddres(address) // waiting 
    console.log('user',user)
}
displayUser()
// function callback(user){
//     console.log("User",user)
//     getAddress(user.userName,(address=>{
//         console.log("adress",address)
//     }))
// }



function getAddress(username,callback){
    setTimeout(()=>{
        callback( ["mumbai","pune","bangluru"] )
    })
    
}


//sync way

// function getUserData(){

// return [[{"id":1,"first_name":"Patsy","last_name":"Ellif","email":"pellif0@apple.com","gender":"Genderfluid"},
// {"id":2,"first_name":"Connor","last_name":"Bodleigh","email":"cbodleigh1@t.co","gender":"Male"},
// {"id":3,"first_name":"Felicia","last_name":"Gludor","email":"fgludor2@eventbrite.com","gender":"Female"},
// {"id":4,"first_name":"Judon","last_name":"Perrin","email":"jperrin3@loc.gov","gender":"Genderfluid"},
// {"id":5,"first_name":"Hort","last_name":"Vyvyan","email":"hvyvyan4@pagesperso-orange.fr","gender":"Male"},
// {"id":6,"first_name":"Stoddard","last_name":"Girkin","email":"sgirkin5@cdc.gov","gender":"Female"},
// {"id":7,"first_name":"Donni","last_name":"Sellack","email":"dsellack6@army.mil","gender":"Female"},
// {"id":8,"first_name":"Sebastien","last_name":"Hargrave","email":"shargrave7@eventbrite.com","gender":"Male"},
// {"id":9,"first_name":"Rutledge","last_name":"Hourihane","email":"rhourihane8@uol.com.br","gender":"Male"},
// {"id":10,"first_name":"Tybie","last_name":"Gaither","email":"tgaither9@nifty.com","gender":"Female"}]]
// }

// userData=getUserData()
// console.log(userData)



