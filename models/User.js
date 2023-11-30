const mongoose = require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
// creating product schema
let userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true 
    },
    contact:{
        type:Number,
        required:true,
    
    },
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
    
});

userSchema.plugin(passportLocalMongoose);
// creating model
let User = mongoose.model('User' , userSchema )

module.exports = User; //sending the model to be used anywhere when required