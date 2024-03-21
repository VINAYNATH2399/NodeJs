

// let jaanvar = require("./animal") // folder
// console.log(jaanvar);

// Whenever you require anyfolder then the index.js file inside that folder is responsible for the export of it

// let {cat,dog} = require("./animal") // folder
// console.log(cat);
// console.log(dog);

/*
E:\Web Development\NodeJs\6_Requiring_folder>node app.js
{ cat: [Function: cat] }
{ dog: [Function: dog] }
*/

let {cat,dog} = require("./animal") // folder
console.log(cat.cat());
console.log(dog.dog());

/*
E:\Web Development\NodeJs\6_Requiring_folder>node app.js
meow meow
undefined
bhokega
undefined
*/