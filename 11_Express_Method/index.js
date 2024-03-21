
const express = require('express')
const app = express()

const port = 8080;
app.listen(port, ()=>{
    console.log("This is my server");
})


// middleware -> functions -> harr incoming request par chlta hai

// app.use((require, response)=>{ // path is not specified
//     response.send("<h1>My name is chintu</h1>")
// })

// top to bottom -> (code flow)

// app.use('/cat', function (req, res) { // path specified
//     res.send('Welcome cat')
//   })


// middleware advance-> 
app.use('/cat', function (req, res, next) { // path specified
    console.log('Welcome cat');
    next(); // agle middleware(function) parbhejdo
  })


// agar use wala path match ho gya toh ye chal jayega
//http://localhost:8080/cat -> browser mein karne par
//http://localhost:8080/cat/vin -> browser mein karne par


// GET -> Path, CallBack Function
app.get('/chin', (req, res)=>{
     res.send("I am strong")
})

app.get('/cat', (req, res)=>{
     res.send("My name is Chintu")
})

// for all the left over paths
app.get('*',(req,res)=>{
      res.send("error page 404")
})




