const mongoose = new require('mongoose'),
{Schema} = mongoose

const Book = require('./book')
const Author = new Schema ({
    name:{
        type:String,
        required: [true, "Author name should be provided"]
        }, 
    age: Number,

    nationality: {
        type: String,
        required: [true, "Author nationality should be provided"]
    },
    image: {
        type: String,
        required: [true, "Author image should be provided"]
    },
    gender: String,
    books:[Book.schema],
})

module.exports = mongoose.model('Author',Author);