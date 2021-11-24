let mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchame = new Schema({
  title: {
    type: String,
    required: ["Book title should be provided"],
  },
  pages: {
    type: Number,
    required: ["Book pages should be provided"],
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: ["Book image should be provided"],
  }
})


const authorSchame = new Schema({
  name: {
    type: String,
    required: ["Author name should be provided"],
  },
  age: {
    type: Number,
  },
  nationality: {
    type: String,
    required: ["Author nationality should be provided"],
  },
  image: {
    type: String,
    required: ["Author image should be provided"],
  },
  gender: {
    type: String,
  },
  books: [bookSchame]
});


const Book = mongoose.model("Book", bookSchame);
const Author = mongoose.model("Author", authorSchame);

module.exports = { Book, Author };
