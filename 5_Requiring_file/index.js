
//------------------------------------------
// let math = require('./app');
// console.log(math);

/* cmd me likhne par
node index.js
3.14
81
6
{}
*/

// when u donot export anything from ur file by default empty object is being sent

// module.exports ={} // by default

//--------------------------------------------

// let math = require('./app');

// console.log(math); // object -> destructure

// console.log(math.PI);
// console.log(math.ans1(6));
// console.log(math.ans2(6,9));

//-------------------------------------------------

// let math = require('./app');

// // console.log(math);

// let {PI, ans1, ans2} = math

// console.log(PI);
// console.log(ans1(6));
// console.log(ans2(6,9));

//--------------------------------------------------

// let {PI, ans1, ans2} = require('./app');

// console.log(PI);
// console.log(ans1(6));
// console.log(ans2(6,9));

//----------------------------------------------

let {PI:hello, ans1, ans2} = require('./app');

console.log(hello);
console.log(ans1(6));
console.log(ans2(6,9));

