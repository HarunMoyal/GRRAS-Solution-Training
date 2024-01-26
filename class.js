// class myClass{
//     constructor(){

//     }

// }
class product{
    constructor(name,price,rating){
        this.name=name;
        this.price = price;
        this.rating = rating
    }
}

let class1 = new product("Iphone",100000,25)
let class2 = new product("Samsung",45000,55)
console.log(class1)
console.log(class2)