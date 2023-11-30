const express=require('express');
const Product = require('../models/Product');
//const multer = require('multer');
//const Image=require('../models/Image');
//const storage = multer.memoryStorage(); 
//const upload = multer({ storage: storage });
const router=express.Router();

router.get('/home',async(req,res)=>{
   
    res.render('products/index');
});

//toshow all products
router.get('/products/Electronic',async(req,res)=>{
    let products=await Product.find({}); //products.find  promise return krta h toh then or catch ka better way is to use await bcoz then nd catch mai timelgta h response generate hone mai
    res.render('products/electronics',{products});
});

//toshow all products
router.get('/products/Clothes',async(req,res)=>{
    let products=await Product.find({}); //products.find  promise return krta h toh then or catch ka better way is to use await bcoz then nd catch mai timelgta h response generate hone mai
    res.render('products/clothes',{products});
});

//toshow all products
router.get('/products/DecorItem',async(req,res)=>{
    let products=await Product.find({}); //products.find  promise return krta h toh then or catch ka better way is to use await bcoz then nd catch mai timelgta h response generate hone mai
    res.render('products/decorItem',{products});
});

//toshow all products
router.get('/products/BookStationary',async(req,res)=>{
    let products=await Product.find({}); //products.find  promise return krta h toh then or catch ka better way is to use await bcoz then nd catch mai timelgta h response generate hone mai
    res.render('products/bookStationary',{products});
});

//toshow all products
router.get('/products/Vehicle',async(req,res)=>{
    let products=await Product.find({}); //products.find  promise return krta h toh then or catch ka better way is to use await bcoz then nd catch mai timelgta h response generate hone mai
    res.render('products/vehicle',{products});
});

//toshow all products
router.get('/products/Furniture',async(req,res)=>{
    let products=await Product.find({}); //products.find  promise return krta h toh then or catch ka better way is to use await bcoz then nd catch mai timelgta h response generate hone mai
    res.render('products/furniture',{products});
});


//to show particular product
router.get('/products/:id',async(req,res)=>{
    let {id}=req.params;
   let foundProduct = await Product.findById(id)//populate--> reviews ki array mai jaega or uss particular id k corresponding 
                                                                    // reviews k db mai sara data le aega as ref:reviews de rakha h
  // console.log(foundProduct);                                                                 
   res.render('products/show',{foundProduct});
})



router.get('/product/new',async(req,res)=>{
    res.render('products/new');
})
//to actually add product

router.post('/home',async(req,res)=>{
    //console.log(req.body);
    let {name,img,price,desc,category}=req.body;
   await Product.create({name,img,price,desc,category})
    res.redirect('/home');

})


router.get('/find', async (req, res) => {
    let { search } = req.query;
    //console.log(search)
    search = search.toLowerCase();
    let Products = await Product.find({});
    Products.map((cv) => {
        cv.name = cv.name.toLowerCase();
    })
    Products = Products.filter((cv) => {
        return cv.name.includes(search);
    })
    // Products.map((cv) => {
    //     cv.name = cv.name.toCapi();
    // })
    let arr = new Array();

    arr = await finds(Products, arr);
    // console.log(Products);
    // console.log(arr);
    //res.send("hii")
    res.render("products/search", { Products: arr });
})
async function finds(Products, arr) {
    for (let item of Products) {
        let value = await Product.findById(item.id);
        arr.push(value);
    }
    return arr;
}


module.exports=router;