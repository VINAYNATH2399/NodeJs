
const express = require("express")
const app = express()
const path = require('path')
const {server} = require('http')
const mongoose = require('mongoose');
const seedDB = require('./seed')
const productRoutes = require('./routes/product')
const reviewRoutes = require('./routes/review')
const methodOverride = require('method-override')

const flash = require('connect-flash')
const session = require('express-session')

let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
  }

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))


mongoose.connect('mongodb://127.0.0.1:27017/julybatch') // this connect returns a promise
// aur promise ko resolve karne ke liye hm .then and .catch ki chaining
.then(()=>{console.log("DB connected")})

.catch((err)=>{
    console.log("Error is : ", err);
})


app.use(session(configSession));
app.use(flash())

app.use((req,res, next)=>{
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})


// seedDB() //baar baar store hojaega if not commented

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true})) // form data body parser

app.use(productRoutes);
app.use(reviewRoutes)



app.listen(8080,()=>{
    console.log("server is installed");
})

// 1. basic Server
// 2. mongoose connection
// 3. model -> seed data
// 4. routes -> views
// 5. rating schema -> product change -> form to add the rating and comment (show.ejs)

