const mongoose = require("mongoose")


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
})


const Book = mongoose.model("Book", bookSchema)





const autherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Auther name should be provided"]
    },
    age: {
        type: Number

    },
    nationality: {
        type: String
    },
    image: {
        type: String,
        required: [true, "Auther image should be provided"]
    },
    gender: {
        type: String,
        required: [true, "Auther gender should be provided"]
    },
    books: [bookSchema]
})


const Auther = mongoose.model("Auther", autherSchema)
module.exports = { Auther, Book }