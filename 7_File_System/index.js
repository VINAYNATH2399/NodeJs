
// module:- 3rd party code jo kisi baba ne already likha hua h

// const fs = require('fs'); // object

//---------------------------------------------------------

// let data = "My name is chintu bengali"

 //1.  Create -> writeFile()

// fs.writeFile('abc.txt', data, {}, ()=>{})

// fs.writeFile('abc.txt', data, {
//       // optional part
//         encoding:"utf-8",
//         flag:'w'
// }, 
// (err)=>{
//     if(err){
//         throw err
//     }
//     console.log("File written sucessfully");
// })


// fs.writeFile('abc.txt', data,
// (err)=>{
//     if(err){
//         throw err
//     }
//     console.log("File written sucessfully");
// })

//-------------------------------------------------------------------------

 //2.  Read -> readFile()

 //syntax:- fs.readFile('abc.txt', {}, ()=>{})

// const fs = require('fs'); // object

// let data = "My name is chintu bengali"

// method 1

// fs.readFile('2nd.txt',
//  {
//     encoding:"utf-8",
//         flag:'r'
// },
// (err, data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data);
// })

// method 2

// fs.readFile('2nd.txt',

// (err, data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data.toString());
// })

//-----------------------------------------------------

 //3.  Update -> appendFile()

//  const fs = require('fs'); // object

// let data = "My name is chintu bengali"

// fs.appendFile('abc.txt', ' shubham',

// (err)=>{
//     if(err){
//         throw err
//     }
//     console.log("File successfully");
// })

//-----------------------------------------------

 //4.  Delete -> unlink()

//  const fs = require('fs'); // object

// let data = "My name is chintu bengali"

// fs.unlink('2nd.txt',

// (err)=>{
//     if(err){
//         throw err
//     }
//     console.log("File delete successfully");
// })




