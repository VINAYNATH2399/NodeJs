const express = require('express');
const router = express.Router(); // mini application
const User = require('../models/User');
const passport = require('passport');

router.get('/register', (req,res)=>{
     res.render('signup')
})

router.post('/register', async (req, res) => {
    try {
        let { username, password, email, gender } = req.body;
        let newUser = new User({ username, email, gender });
        let registeredUser = await User.register(newUser, password); // Assuming User.register is a static method
        res.send(registeredUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/login', (req,res)=>{
    res.render('login')
})

router.post('/login',
  passport.authenticate('local', 
  { 
    failureRedirect: '/login', 
    failureMessage: true 
  }),
  function(req, res) {

    res.redirect('/products');
  });


module.exports = router;