const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const { validateReview } = require('../middleware');

const router = express.Router(); // mini application
const session = require('express-session')
const flash = require('connect-flash');

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
   try{

       let { rating , comment } = req.body;
       let { id } = req.params;
   
       let product = await Product.findById(id);
       // new review using class
       let review  = new Review({ rating , comment });
   
       product.reviews.push(review);
   
       await product.save();
       await review.save(); 
   
       // adding flash message
       req.flash('success', 'Flash is back!')
   
       res.redirect(`/products/${id}`);
   }

   catch(err){
    res.status(500).render('error', (error.message))
   }
})


module.exports = router;
