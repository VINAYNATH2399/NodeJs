
const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// statics -> haar req -> middleware
app.use(express.static(path.join(__dirname, 'public')))
    ``

//route -> page -> styling (public -> css -> style.css)
app.get('/whatever',(req,res)=>{
    res.render('whatever')
})

//route -> page -> styling (style.css, bootstrap) + DRY PRINCIPLE
app.get('/horror',(req,res)=>{
    res.render('horror')
})

app.listen(8080,()=>{
    console.log("server installed 8080");
})


