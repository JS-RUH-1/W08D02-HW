
const mongoose = require('mongoose')
const BookSchema = require('./bookSch')



module.exports = new mongoose.Schema({
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
    books:[BookSchema]

});