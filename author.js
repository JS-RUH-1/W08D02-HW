const { Schema, model } = require("mongoose");
const Book = require("./book");

// Author Schema

module.exports = model(
  "Author",
  new Schema({
    name: {
      type: String,
      required: [true, "Please add name for the author"],
    },
    age: Number,
    nationality: {
      type: String,
      required: [true, "Please add age for the author"],
    },
    image: {
      type: String,
      required: [true, "Please add image for the author"],
    },
    gender: String,
    books: [Book.schema],
  })
);