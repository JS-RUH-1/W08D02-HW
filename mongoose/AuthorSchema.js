const mongoose = require('mongoose');
const BookSchema = require("./BookSchema");

module.exports =  new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Author name should be provided']
    },
    nationality: {
      type: String,
      required: [true, 'Author nationality should be provided']
    },
    image: {
      type: String,
      required: [true, 'Author image should be provided']
    },
    gender: String ,
    books: [BookSchema],
    age: Number,
  });