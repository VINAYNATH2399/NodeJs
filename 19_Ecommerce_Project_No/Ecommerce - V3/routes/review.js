const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const { validateReview } = require('../middleware');
const router = express.Router(); // mini application

//review route
// router.post("/products/:id/rating",(req,res)=>{
//     try{
//         console.log(req.body);
//         res.send(req.body)
//     }
//     catch(err){
//         console.log(err);
//     }
// })

router.post('/products/:id/rating' , validateReview, async(req,res)=>{
    let { rating , comment } = req.body;
    let { id } = req.params;

    let product = await Product.findById(id);
    // new review using class
    let review  = new Review({ rating , comment });

    product.reviews.push(review);

    await product.save();
    await review.save(); 
    res.redirect(`/products/${id}`);
})

// router.post("/products/:id/rating", async (req, res) => {
//     try {
//         let { rating, comment } = req.body;
//         let { id } = req.params;

//         let product = await Product.findById(id);

//         if (!product) {
//             return res.status(404).json({ error: "Product not found" });
//         }

//         let review = new Review({ rating, comment });

//         product.reviews.push(review);

//         await product.save();
//         await review.save();
//         res.redirect(`/products/${id}`);
//     } catch (error) {
//         console.error("Error in the rating route:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });



module.exports = router;
