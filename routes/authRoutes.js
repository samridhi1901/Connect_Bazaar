const express = require('express');
const router = express.Router(); //mini instance/application;
const User=require('../models/User');
const passport=require('passport');

//to show the form for registering a user 
router.get('/register',(req,res)=>{
    res.render('auth/signup');

})

//to actually want to register a user in my db 

router.post('/register',async(req,res)=>{
    
    let {email,username,password,contact}=req.body;
      if (!email || !username || !password || !contact) {
          return res.redirect( '/register' );
        
       }
  
      // Check if the user already exists
       const existingUser = await User.findOne({ email });
       if (existingUser) {
    //      return res.status(400).json({ error: 'User already exists with this email' ,email,username,contact});
    return res.redirect('/register?error=userExists');
        }
    const user=new User({email,username,contact});
    const newUser=await User.register(user,password);
    res.redirect('/login');
    
})

// to get login form 
router.get('/login',(req,res)=>{
    res.render('auth/login');

})


// to actually login via the db
router.post('/login',
    passport.authenticate('local',{
        failureRedirect:'/login',
        failureMessage:true
    }),
   async (req,res)=>{
        //console.log(req.user,'adya')//to see the entire logged in user
       // req.flash('success','Welcome Back')
        res.redirect('/home');
})




//logout
router.get('/logout',(req,res)=>{
    
    req.logout((err)=>{
        if(err){
        return next(err);
        }
    //logout function hmesha callback function k andr kaam krta h 
req.session.destroy();
res.redirect('/home');
});
});


// export so that you can use it in app.js
module.exports = router;