const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: [true, "Book title should be provided"]},
    pages: { type: Number, required: [true, "Book pages should be provided"]},
    price: { type: Number, default: 0},
    image: { type: String, required: [true, "Book image should be provided"]}
})

const AuthorSchema = new Schema({
    name: { type: String  ,required: [true, "Author name should be provided"]},
    age: { type: Number},
    nationality: { type: String ,required: [true, "Author nationality should be provided"]},
    image: { type: String , required: [true, "Author image should be provided"]},
    gender: { type: String },
    books: [BookSchema]
})

const Author = mongoose.model('auther', AuthorSchema);
const Book = mongoose.model('book', BookSchema);
module.exports ={Book,Author}