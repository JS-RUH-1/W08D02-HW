const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {type: String, required: "Book title should be provided"},
    pages: {type: Number, required: "Book pages should be provided"},
    price: {type: Number, default: 0},
    image: {type: String, required: "Book image should be provided"}
});

const Book = mongoose.model("Book", BookSchema);

const AuthorSchema = mongoose.Schema({
    name: {type: String, required: "Author name should be provided"},
    age: {type: Number},
    nationality: {type: String, required: "Author nationality should be provided"},
    image: {type: String, required: "Author image should be provided"},
    gender: {type: String},
    books: {type: [BookSchema]}
});

const Author = mongoose.model("Author", AuthorSchema);


module.exports = {Book, Author};
