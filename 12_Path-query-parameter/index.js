
const express = require('express')
const app = express()


// app.get('/r/cat',(req,res)=>{
//     res.send('cat')
// })

// app.get('/r/dog',(req,res)=>{
//     res.send('dog')
// })

// app.get('/r/:dog',(req,res)=>{
//     console.log(req);
//     res.send('chintu')
// })

//------------------------------------------------

// Destructure
// path parameter -> req.paras -> object
// app.get('/r/:dog',(req,res)=>{
//     console.log(req.params); //object
//     let {dog} = req.params;
//     res.send(`rew sent at :${dog}`)
// })

//-------------------------------------------------
// query parameter(?) -> req.query -> object

app.get('/search',(req,res)=>{
    //console.log(req); //object cmd mein aayega
    console.log(req.query);
    let {name, surname} = req.query;
    res.send(`query parameter aagya ${name} and ${surname}`)
})

const port = 8080;
app.listen(port, ()=>{
    console.log(`server connected at ${port}`);
})




