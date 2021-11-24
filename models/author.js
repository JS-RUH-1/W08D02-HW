const { Schema, model } = require("mongoose");
const Book = require('./book');

module.exports = model('Author', new Schema({ 
    name: {
        type: String,
        required: [true, "Author name is required"]
    },
    age: Number,
    nationality: {
        type: String,
        required: [true, "Author nationality is required"]
    },
    image: {
        type: String,
        required: [true, "Author image is required"]
    },
    gender: String,
    books: [Book.schema]
 }))