
//use for each method
const numbers = [12, 18, 45, 23, 98, 76, 56, 90, 84, 68];


numbers.forEach(number => {
  if (number > 50) {
    console.log(number);
  }
});
//use map mathod
let a =[];
let fil=numbers.filter(number =>(number > 50) );
  console.log(fil)