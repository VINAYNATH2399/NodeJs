const express = require('express')
const app = express()
const path = require('path')

let arr = ['h1','hello', 'bye']
let arr2 = ['h1','hello', 'bye']

let tudolist = ["uthna", "mutna", "khana", "hagna"]

let rn = Math.floor(Math.random(25)+6)

app.set('view engine', 'ejs'); // key , value
// viewa ke path jaane ka tarika
app.set('views', path.join(__dirname, "views"))

// views tk path pta hone ke baad ka code
// home
app.get('/', (req,res)=>{
     res.render('app') // app.ejs likhne ki jarurat nhi hai
})

//star
// app.get('/star', (req,res)=>{
//     res.render('star')
// })

app.get('/star', (req,res)=>{
    res.render('star', {arr,arr2})
})

//rn
app.get('/random', (req,res)=>{
    res.render('random',{rn})
})

// tudolist
app.get('/tudo', (req,res)=>{
    res.render('tudo',{tudolist})
})

app.listen(8080,()=>{
    console.log("server connected at port 8080");
})


