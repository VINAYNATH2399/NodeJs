
const mongoose = require('mongoose') // object
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    // username = passport - local- mongoose
    // password = passport - local- mongoose
    email: {
        type : String,
        trim : true,
        required : true
    },
    gender : {
        type : String,
        trim : true,
        required : true

    }

})

userSchema.plugin(passportLocalMongoose); //always apply on schema


let User = mongoose.model('User', userSchema)

module.exports = User; 
