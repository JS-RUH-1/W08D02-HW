const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  pages: String,
  price: Number,
  image: String,
});

const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  nationality: String,
  image: String,
  gender: String,
  books: Array,
});

const Author = mongoose.model("Author", authorSchema);

const Book = mongoose.model("Book", bookSchema);

module.exports = { book: Book, author: Author };
