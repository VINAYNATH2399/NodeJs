
const express = require('express');
const Product = require('../models/Product');
const router = express.Router(); // mini application
const { validateProduct } = require('../middleware');
const Review = require('../models/Review');
const session = require('express-session')
const flash = require('connect-flash');

// read
router.get('/products', async (req,res)=>{
    try{

        let products = await Product.find({});
        res.render('index' , {products})
    }
    catch(e){
        res.render('error' , {err : e.message})
    }
});
 
// new form
router.get('/products/new', (req,res)=>{
    res.render('new')
})

//actual adding
router.post('/products', validateProduct , async (req,res)=>{
    try{
        let {name , img , price , desc} = req.body; //by default undefined
        // console.log(name,img,price,desc);
        await Product.create({name , img , price , desc}); //automatically db save
        req.flash('success', "product added sucessfully")
        res.redirect('/products')
    }
    catch(err){
        console.log(err);
    }
})

// show particular product
router.get('/products/:id' , async(req,res)=>{
    try{
        
        let {id} = req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        res.render('show' , {foundProduct , success: req.flash('msg')});
    }
    catch(e){
        res.status(500).render('error' , {err : e.message})
    }
})

// show edit form
router.get('/products/:id/edit' , async(req,res)=>{
    try{
        let {id} = req.params;
        // let foundProduct = await Product.findById(id);
        let foundProduct = await Product.findById(id);
        res.render('edit' , {foundProduct})
    }
    catch(e){
        res.render('error' , {err : e.message})
    }
})

// actually changing the product
router.patch('/products/:id' , validateProduct , async(req,res)=>{
    try{
        let {id} = req.params;
        let {name , img , price , desc} = req.body;
        await Product.findByIdAndUpdate(id , {name , img , price , desc} );
        req.flash('success', "product edited sucessfully")
        res.redirect('/products')
    }
    catch(e){
        res.render('error' , {err : e.message})
    }
})

//deleting
router.delete('/products/:id' , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        //deleting reviews before deleting product
        for(let ids of foundProduct.reviews){
            await Review.findByIdAndDelete(ids);
        }

        await Product.findByIdAndDelete(id);
        res.redirect('/products');
    }
    catch(e){
        res.render('error' , {err : e.message})
    }
})

module.exports = router;
