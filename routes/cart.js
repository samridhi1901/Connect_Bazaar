const express = require('express');

const router = express.Router(); //mini instance/application;
const Product =require('../models/Product');
const User =require('../models/User');


//route to se cart
router.get('/user/cart',async(req,res)=>{
   let user=await User.findById(req.user._id).populate('cart');
   res.render('cart/cart',{user});
})
//actually adding pro to cart
router.post('/user/:productId/add',async(req,res)=>{
    let {productId}=req.params;
    let userId= req.user._id;
    let product=await Product.findById(productId);
    let user=await User.findById(userId);
    user.cart.push(product);
    await user.save();
    res.redirect('/user/cart');
})


module.exports=router;