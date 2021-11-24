const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Book = mongoose.model("Book", bookSchema);

const bookSchema = new mongoose.Schema({
    title:{ type: String, required :[ true,"Book title should be provided"]},
    pages: { type: Number, required: [true, "can't be blank"] },
    price: { type: Number, default: 0},
    image: {type: String, required :[true, "Book image should be provided"]},
});

module.exports = Book;