let fruits=['mango','banana','apple']

// push (adding the element in the last)
// fruits.push('lemon')
// console.log("fruits",fruits)
// fruits.pop()
// console.log("fruits",fruits)
// fruits.unshift("lemon")
// console.log("fruits",fruits)
// fruits.shift()
// console.log("fruits",fruits)
// fruits.splice(0,1)
// console.log("fruits",fruits)

var personData=[{"id":1,"first_name":"Noel","last_name":"McAreavey","email":"nmcareavey0@g.co","gender":"Female"},
    {"id":2,"first_name":"Ally","last_name":"Byass","email":"abyass1@msu.edu","gender":"Female"},
    {"id":3,"first_name":"Sib","last_name":"Brastead","email":"sbrastead2@unblog.fr","gender":"Female"},
    {"id":4,"first_name":"Pebrook","last_name":"Chuter","email":"pchuter3@csmonitor.com","gender":"Male"},
    {"id":5,"first_name":"Hans","last_name":"Alyoshin","email":"halyoshin4@digg.com","gender":"Male"},
    {"id":6,"first_name":"Sheffield","last_name":"Bain","email":"sbain5@go.com","gender":"Male"},
    {"id":7,"first_name":"Derril","last_name":"Monckman","email":"dmonckman6@answers.com","gender":"Male"},
    {"id":8,"first_name":"Blaine","last_name":"Trahearn","email":"btrahearn7@jiathis.com","gender":"Male"},
    {"id":9,"first_name":"Elisha","last_name":"Gantley","email":"egantley8@google.co.uk","gender":"Female"},
    {"id":10,"first_name":"Glyn","last_name":"Jeeves","email":"gjeeves9@vimeo.com","gender":"Male"}]

    // // 1 for loop
    // for (var i=0;i<10;i++){

    //     console.log("person",personData[i].first_name)
    // }
    // // for loop 
    // for (person of personData){
    //     console.log("person",person)
    // }

    // personData.forEach(callBack)

    // function callBack(item,index,arr){

    //     console.log("index",index)
    //     console.log("item",item)
    //     console.log("array",arr)
    // }

//     //map and filter
//  const arr=[1,2,3,5,6]
// // const newArr=arr.filter(a=> a%2===0)
// // console.log("newArr",newArr)

// var dubbleArray=arr.map(callBack)
// function callBack(value,index ,arr){
//   return value **2;
// }
// console.log(dubbleArray)

var ages = [23, 21, 31, 32];

function checkAdult(age) {
  return age >= 18;
}
value=ages.every(checkAdult)
console.log("value",value)