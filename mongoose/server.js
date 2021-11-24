const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const mongoose = require('mongoose');
const seedBook = require("./book_seed");
const seedAuthor = require("./author_seed");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const BookSchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, 'Book title should be provided']
  },
  image: {
    type: String,
    required: [true, 'Book image should be provided']
  },
  price: Number,
  pages: {
    type: Number,
    required: [true, 'Book pages should be provided']
  },
});
const AuthorSchema = new mongoose.Schema({
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

const Author = mongoose.model('Author', AuthorSchema);
const Book = mongoose.model('Book', BookSchema);

Book.insertMany(seedBook, (err, books) => {
  if (err){ console.log(err)}
    console.log("added provided books data", books)
    // mongoose.connection.close();
  });

Author.insertMany(seedAuthor, (err, books) => {
  if (err){ console.log(err)}
    console.log("added provided authors data", books)
    // mongoose.connection.close();
});

Author.find({gender: 'male'}, (err, authors) => {
  authors.map((author)=>{
    console.log(author.gender)
  })
  // mongoose.connection.close();
}); 

Author.find({ age: { $gt: 44}}, (err, authors) => {
  authors.map((author)=>{
    console.log(author.age)
  })  // mongoose.connection.close();
}); 

Author.find({ nationality: 'Kuwait' }, (err, authors) => {
  authors.map((author)=>{
    console.log(author.nationality)
  })  // mongoose.connection.close();
}); 


Author.find({ age: { $exists: false } }, (err, authors) => {
  authors.map((author)=>{
    console.log(author.name)
  })  // mongoose.connection.close();
}); 

Author.find({ $or: [{ nationality: 'Kuwait'  }, { nationality: 'Saudi Arabia' }] }, (err, authors) => {
  authors.map((author)=>{
    console.log(author.nationality)
  })  // mongoose.connection.close();
}); 

Author.find({ $and: [{ age: { $gt: 35 }  }, { books: { $size: 3 } }] }, (err, authors) => {
  authors.map((author)=>{
    console.log(author)
  })  // mongoose.connection.close();
}); 


Book.find({ pages: { $gt: 250}}, (err, books) => {
  books.map((book)=>{
    console.log(book.pages)
  })    // mongoose.connection.close();
}); 


Author.find( { nationality: { $not: { $regex: 'Saudi Arabia'  } } }, (err, authors) => {
  authors.map((author)=>{
    console.log(author.nationality)
  })  // mongoose.connection.close();
}); 


Author.findOneAndUpdate({ name: 'Osama Al Muslim' }, { age: 45 }, () => {
    console.log('updated')
}); 

Book.deleteMany({ price: { $lt: 50}}, (err, books) => {
  // mongoose.connection.close();
  console.log('deleted')
}); 


app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());

app.get("/", (req, res) => {
    // console.log("name: " + silence.name+ " age: " + silence.age);
});


app.listen(PORT, () => {
  console.log(`Connected on= http://localhost:${PORT}`);
});