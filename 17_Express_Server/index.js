const express = require("express")
const app = express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
    // jab bhi '/' pe request aayegi mein callback function pass karunga res.send ki madad se

})

// app.post('/',(req,res)=>{
//     res.send('Posting on servar');
//     // postman ka use post request bhejne ke liye use hota hai kyuki server me post request 
//     // nhi bhej sakte
// })

app.post('/', (req,res)=>{
    const data = req.body  // data milega body mein
    console.log('data', data);
    res.send('posting')
})


app.listen(8080,()=>{
    console.log("server is installed");
})
