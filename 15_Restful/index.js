const express = require('express')
const app = express()
const path = require('path')  // node module already present

const methodOverride = require('method-override') // for put/patch/delete

let comments = [
    { 
        id : 0,
        username:"vin",
        comment : "Live batch ke students kisi se kam hai kya"
    },
    {
        id : 1,
        username:"nath",
        comment : "didi tera dewar dewana"
    },
    {
        id : 2,
        username:"mintu",
        comment : "moye moye"
    },
    {
        id : 3,
        username:"vivek",
        comment : "mein tera hero"
    }
]

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views') ) //templates
app.use(express.static(path.join(__dirname, 'public'))) // public -> statics file

//body parsing middlewares ->

// app.use(express.json()) // for json data

app.use(express.urlencoded({extended: true})) // for form data

app.use(methodOverride('_method')) //method overiding
// jab bhi mein _method ko use karunga tab method override istamaal hoga


// RESTFUL route according to the RESTful table -> right to left
// task - 1 show all the comment -> where are my comments -> DB == ARRAY

app.get('/comments',(req,res)=>{
    res.render("index",{comments})
})

// task - 2 -> show form for new comment

app.get('/comments/news',(req,res)=>{
      res.render('news')
})

// task - 3 -> to actually add the comment in the DB/ARRAY -> req.body

// app.post('/comments',(req,res)=>{
//       console.log(req.body); // by default -> undefined -> to change i use middlewares
//       res.send(req.body)
// })

// Destructure

app.post('/comments',(req,res)=>{
    let {username, comment} = req.body;
    comments.push({username,comment,id:comments.length});
    res.redirect("/comments") //GET request gyi '/comment' par
})

// task -> 4 -> to show a particular comment in the DB/ARRAY -> req.params
// app.get('/comments/:id',(req,res)=>{
//     console.log(req.params);
//     res.send(req.params)
// })

// Destructure parts
app.get('/comments/:commentId',(req,res)=>{
   let {commentId} = req.params
   let foundComment = comments.find((comment)=>{
        //return comment.id == commentId // way-1
        return comment.id === parseInt(commentId) // way-2
      })
    //   console.log(foundComment);
    //   res.send(foundComment)
      res.render('show', {foundComment})
   })
//    foundComment = object

//Task -5 -> to show a the edit form

app.get('/comments/:commentId/edit',(req,res)=>{
    let {commentId} = req.params
    let foundComment = comments.find((comment)=>{
        return comment.id === parseInt(commentId)
      })
    res.render('edit',{foundComment})
})

// Task - 6 -> to actually edit in the DB/ARRAY

app.patch('/comments/:commentId',(req,res)=>{
    let {commentId} = req.params
    let foundComment = comments.find((comment)=>{
        return comment.id === parseInt(commentId)
      })
    let {comment} = req.body
    foundComment.comment = comment; // array mein change horha
    res.redirect('/comments')
})

// Task -7 to actally delete from the array
app.delete('/comments/:commentId', (req,res)=>{
    let {commentId} = req.params;
    let newcomments = comments.filter((comment)=>{return comment.id != commentId})
    comments = newcomments
    res.redirect('/comments');
})

app.listen(8080,(req,res)=>{
    console.log("Server is installed");
})

