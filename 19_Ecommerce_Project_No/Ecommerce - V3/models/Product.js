
const mongoose = require('mongoose') // object

// scheme

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim : true,
        required : true,
    },
    img : {
        type : String,
        trim : true,
    },
    price : {
        type : Number,
        min : 0,
        required : true,
    },
    desc : {
        type : String,
        trim : true,
    },
    reviews : [
        {
            type : mongoose.Schema.Types.ObjectId,
        // hey mongoose mujhe dusre ke schema me jakar uska type jo hai
        // sirf aur sirf objectId wali value yha par store kr do
            ref : 'Review'
    }
]

})

// model/collection -> js class -> objects/document
// model -> sigular & capital letter

let Product = mongoose.model('Product', productSchema)

module.exports = Product; 
// hmne models me product.js bnaya hai pr hm iska istamaal toh app.js mein krenge na 
// isliye module.exports hoga



