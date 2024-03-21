

const dog = require("./dog")
const cat = require("./cat")

// module.exports = "vinay"
//output :-  vinay

module.exports = {cat,dog}

// output
// E:\Web Development\NodeJs\6_Requiring_folder>node app.js
// { cat: { cat: [Function: cat] }, dog: { dog: [Function: dog] } }