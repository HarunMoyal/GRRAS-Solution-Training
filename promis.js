// let myPromise = new Promise((resolve,rejected)=>{
//     setTimeout(() => {
//         console.log("Async task detail")
//         resolve({Name:"Harun", Age:39});//yeh nho hoga toh reject perform hoga
//         rejected({Error: "rejected"})
//     }, 2000);
// }).then((result)=>{
//     console.log(result)
// console.log("Task Response")
// return result.Name;
// }).then((result1)=>{
//     console.log("Second Then",result1)
// }).catch((error)=>{
//     console.log("Rejected :")
//     console.log(error)
// }).finally(()=>{
//     console.log("Yeh Toh Run Hoga hi")
// })


// // async function myData(){
// //     try{
// //     let result =    await myPromise
// // }
// fetch("http://dummyjson.com/products/1").then((result)=>{
//     return result.json()
// }).then((data)=>{
//     console.log(data)
// })

// let mySet = new Set()//unique value store krga hamesha
// console.log(mySet)
// mySet.add("Haaaa")
// mySet.add("Naaaa")
// console.log(mySet)
// mySet.delete("Naaaa");
// console.log(mySet)

function UniqueId(a){
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
let randomId ="";



    for(let i =0;i<a;i++){
     let MyId = Math.floor(Math.random()*character.length)
    //  console.log(MyId)
    randomId += character.charAt(MyId)
    }
return randomId
}
let id = UniqueId(10);
console.log(id)