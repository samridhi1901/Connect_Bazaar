const express=require('express')
const app=express();
const path =require('path');
const mongoose =require('mongoose');//obj
const seedDB= require('./seed')
const productRoutes=require('./routes/product')
const cartRoutes=require('./routes/cart');
//const reviewRoutes=require('./routes/reviewRoutes')
const ejsMate=require('ejs-mate');
const methodOverride=require('method-override');
//const multer = require('multer');


const cookieParser=require('cookie-parser');
const session=require('express-session')
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('./models/User');



app.engine('ejs',ejsMate);
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


const authRoutes=require('./routes/authRoutes');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')//change db
.then(()=>{console.log("DB CONNECTED")}) //resolve
.catch((err)=>{console.log("CONNECTION Error",err)})//rejectm

//seedDB();


let configSesion = {
    secret: 'connectbazaar',
    resave: false,
    saveUninitialized: true,
}



app.use(session(configSesion));


//passport ka use 
app.use(passport.initialize());//passport initialize
app.use(passport.session());//passport mein session local pr store kr ske 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//PASSPORT 
passport.use(new LocalStrategy(User.authenticate()));


app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    next();
})

// Expire middleware
app.use((req, res, next) => {
    res.header('Expires', '-1');
    next();
});



app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);

let PORT=8080;
app.listen(PORT,()=>{
    console.log(`server connected at ${PORT}`);
})




