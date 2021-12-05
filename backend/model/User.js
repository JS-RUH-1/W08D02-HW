const mongoose = require("mongoose");
const {isEmail}=require('validator');
const bcrypt =require("bcrypt");

const userSchema = new mongoose.Schema({
    email :{
        type:String,
        required: [true , 'please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail , 'please enter a valid email']
    },
    password :{
        type:String,
        required:[true , 'please enter an password'],
        minlength:[6 , 'minimum password length is 6 chracters']
    },
})

//fire a function after doc saved ti db 
userSchema.post('save', function (doc , next){
console.log('new user was create & saved' ,doc);
next(); 

})





const User = mongoose.model('user' , userSchema);
module.exports = User;