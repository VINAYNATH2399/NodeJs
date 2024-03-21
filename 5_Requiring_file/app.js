
const PI = 3.14

const ans1 = num=> num*num

const ans2 = (a,b) => a*b

console.log(PI);
console.log(ans1(9));
console.log(ans2(2,3));

// module.exports = {
//     PI : PI,
//     ans1 : ans1,
//     ans2 : ans2
// }

// If my key and value are the same then i can ignore writing my (: value) part


module.exports = {
    PI,
    ans1,
    ans2
}

