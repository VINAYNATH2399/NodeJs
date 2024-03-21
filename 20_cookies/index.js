
const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
// app.use(cookieParser())


app.use(cookieParser('iamstrong')); // secreat
//cookieParser("secret") required for signed cookies


app.get('/', (req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies)
}) // cookies milegi pass ke bina

// app.get('/',(req,res)=>{  // signed cookies show hoga
//     console.log(req.signedCookies);
//     res.send(req.signedCookies)
// })

// cookies server bhejta -> server send krvaae cookies ko to the client

app.get('/setcookies', function (req, res) {
    res.cookie('mode', 'dark')  //set
    res.cookie('location', 'delhi')
    res.cookie('username', 'vinay')
    res.cookie('age', 24)

    res.cookie('pass', "chhattisgarh is state", {signed:true}) // secure -> signed cookies

    res.send("maine cookies bhejdi")
    // res.cookie({'favcolor':'red'}) // object is not recomanded

})


// cookies browser mein show hota hai

app.get('/getcookies', function(req,res){
    // console.log(req.cookies); // cmd pr milega
    // res.send(req.cookies) //get
    let {username,age,mode,location} = req.cookies;
    // res.send(mode)
    res.send(`My name is ${username} and my ${age}`)
})

app.listen(5050, ()=>{
    console.log("Server at 5050");
})

