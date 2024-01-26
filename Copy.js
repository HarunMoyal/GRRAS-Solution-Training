const obj ={
    name:"Harun",
    age:"40",
    class:"5",
    address:{
        City:"jaipur",
        Pin:"302012",
    }
}
// let secobj = obj;
secobj={...obj}//shallow copy
// let secobj = obj.assign({},obj1)
secobj.address.city = "Merta"
// let ObjectDeep = JSON.parse(JSON.stringify(obj))
secobj.name = "Moyal"
secobj.age = "47"
console.log(obj)
console.log("seconobj",secobj)
console.log("Deep Copy",ObjectDeep)
