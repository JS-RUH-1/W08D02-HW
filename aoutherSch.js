
const mongoose = require('mongoose')
const BookSchema = require('./bookSch')
const {isEmail} = require('validator')
const Schema = mongoose.Schema
const bcrypt= require('bcrypt')


const AuthorSchema = new Schema({
    name:{ 
        type: String,
        required: [true, "Author name should be provided"]},
    age:{type:Number},
    nationality:{
        type:String,
        required: [true, "Author nationality should be provided"]},
    image:{
        type:String,
        required: [true, "Author image should be provided"]},

    gender:{
        type:String
    },
    books:[BookSchema],

  email:{
        type:String,
        required: [true, " email should be provided"],
        unique: true,
        lowercase: true,
        validate:[isEmail,"is invalid"]
    },
    password:{
    type:String,
    minLength:[6,"pass more than 6"],
    required: [true, "pass should be provided"],
 }

});

//fire a function after doc saved to db

AuthorSchema.post('save', function (doc, next) {
    console.log('new user was created & saved', doc);
    next()
})

//fire a function befor doc saved to db
AuthorSchema.pre('save',async function ( next) {
 const salt = await bcrypt.genSalt()
 this.password = await bcrypt.hash(this.password, salt)
    next()
})

AuthorSchema.statics.login= async function (email,password){
    const author= await this.findOne({ email: email});
    if(author){
       const auth= await bcrypt.compare(password,author.password)
       if(auth){
           return author
       }
       throw Error('incorect password')
    }
    throw Error('incorect email')
}


const Author = mongoose.model("author",AuthorSchema)
module.exports = Author