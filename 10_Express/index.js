
/*
const fs = require('fs') // object
const path = require('path') // onject

fs.writeFile('')
path.join('vinay', 'nath')

*/

//--------------------------------------------

const express = require('express'); // function
// this app is the entire instance of your application.

const app = express(); // return something -> main application object

//console.log(app);
// console.log("I am strong")

app.listen (8080, ()=>{ // portno , cb
// console.log("server connected at port 8080");
    console.log("server connected at port 8080 hi");
})

//--------------------------------------------
// middleware -> function
// app.use(()=>{
//     console.log("you made a request");
// })

// runs on every incoming request
app.use((req, res)=>{
    console.log("you made a request");
    // console.log(req);
    // console.log(res);
    // res.send("server me response hai")
    res.send("<h1>server me response hai</h1>")
})







