
const mongoose = require('mongoose') // object

// scheme

const reviewSchema = new mongoose.Schema({
    rating: {
        type : Number,
        min : 0,
        max : 5
    },
    comment : {
        type : String,
        trim : true
    }

},{timestamps: true}
)

// model/collection -> js class -> objects/document
// model -> sigular & capital letter

let Review = mongoose.model('Review', reviewSchema)

module.exports = Review; 
// hmne models me product.js bnaya hai pr hm iska istamaal toh app.js mein krenge na 
// isliye module.exports hoga



