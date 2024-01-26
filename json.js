// let obj={
//     student1:{
//         name:"harun",
//         class:5,
//         age:25,
//         section:"b"
//     },
//     student2:{
//         name:"arif",
//         class:25,
//         age:35,
//         section:"A"
//     }
// }
// let {student1}= obj;
// let {student2}=obj;
// console.log(student1)
new Promise((resolve,rejected)=>{
    setTimeout(() => {
        console.log("Async task detail")
        resolve({Name:"Harun", Age:39});//yeh nho hoga toh reject perform hoga
        rejected({Error: "rejected"})
    }, 2000);
}).then((result)=>{
    console.log(result)
console.log("Task Response")
return result.Name;
}).then((result1)=>{
    console.log("Second Then",result1)
}).catch((error)=>{
    console.log("Rejected :")
    console.log(error)
}).finally(()=>{
    console.log("Yeh Toh Run Hoga hi")
})