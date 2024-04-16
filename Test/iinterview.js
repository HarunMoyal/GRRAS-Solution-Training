// let Num1 =0;
// let Num2=0;
function SumNum(Numbers, target) {
    const result = [];
    for (let i = 0; i < Numbers.length; i++) {
        for (let j = i + 1; j < Numbers.length; j++) {
            if (Numbers[i] + Numbers[j] === target) {
                 Num1 = Numbers[i];
                 Num2 = Numbers[j];
                result.push([i, j]);
            }
        }
    }
    return result;
}


const Numbers = [2, 7, 11, 15];
const target = 26;
// console.log(SumNum(Num1,Num2))
console.log(SumNum(Numbers, target)); 
