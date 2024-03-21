
const express = require('express')
const app = express()

const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: true } // https->s
  }))

app.get('/', (req,res)=>{
    res.send('welcome to session')
})

// Task - 2
app.get('/viewcount', (req,res)=>{
    if(req.session.count){
        req.session.count +=1;
    }

    else{
        req.session.count = 1;
    }
    res.send(`count: ${req.session.count}`)
    
})

// Task - 1
app.get('/setname', (req,res)=>{
    req.session.username = 'vinay';
    res.send('session added ho gya')
})

app.get('/greet', (req,res)=>{  // route
    let {username = "anomymous"} = req.session;
    res.send(`hi from ${username}`)
})



app.listen(5050, ()=>{
    console.log("server is installed");
})

