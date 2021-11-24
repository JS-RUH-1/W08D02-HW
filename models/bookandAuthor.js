const mongoose = require('mongoose');

 const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title should be provided"]
    },
    pages: {
        type: Number,
        required: [true, "Book pages should be provided"]
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: [true, "Book image should be provided"]
    }
});



 const authorSchema = new mongoose.Schema({
    
    name: {
        type: String,
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
    books : [bookSchema]
});

const Book = mongoose.model('Book', bookSchema);
const Author = mongoose.model('Author', authorSchema);

module.exports={Book , Author}