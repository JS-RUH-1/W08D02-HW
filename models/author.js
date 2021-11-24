const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const authorSchema = new Schema(
  {
    name:{type: String, required : [true,"Author name should be provided"]},
    age:{type: Number},
    nationality:{type: String, required :[true, "Author nationality should be provided"]},
    image:{type: String, required:["Author image should be provided"]},
    gender:{type: String},
    books:[bookSchema]
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", authorSchema);
module.exports = Author