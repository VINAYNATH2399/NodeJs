
const express = require("express")
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Class');

const {Schema} = mongoose; // function
const students = new Schema({  // object manga hai
    name: String,
    rollno : Number,
});

const student = mongoose.model('student',students)

let student1 = new student({name:"vinay", rollno:25})
student1.save();  // bina save kiye data mongoDB me show nhi hoga

app.listen(8080,()=>{
    console.log("server is inatalled port 8080");
})

