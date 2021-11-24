const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Book = require("./models/bookAndAuthor").book;
const Author = require("./models/bookAndAuthor").author;
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://admin:12345@cluster0.0dxd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
}

const seedBook = require("./book_seed");
// Book.insertMany(seedBook, (err, books) => {
//   if (err) {
//     console.log("error: " + err);
//   }
//   console.log("added provided books data", books);
//     mongoose.connection.close();
// });

// const seedAuthor = require("./author_seed");
// Author.insertMany(seedAuthor, (err, Author) => {
//   if (err) {
//     console.log("error: " + err);
//   }
//   console.log("added provided author data", Author);
//     mongoose.connection.close();
// });

// Add at least 2 new author and book
const book1 = new Book({
  title: "Book1",
  pages: "50",
  price: 20,
  image: "img",
});
// console.log(book1);
// Book.insertMany(book1, (err, book) => {
//   if (err) {
//     console.log("error: " + err);
//   }
//   console.log("added provided Book data", book);
//   mongoose.connection.close();
// });

const book2 = new Book({
  title: "Book2",
  pages: "100",
  price: 40,
  image: "img",
});
// console.log(book2);
// Book.insertMany(book2, (err, book) => {
//   if (err) {
//     console.log("error: " + err);
//   }
//   console.log("added provided Book data", book);
//   mongoose.connection.close();
// });

const author1 = new Author({
  name: "author1",
  age: "30",
  nationality: "saudi",
  image: "img",
  gender: "male",
  books: [book1],
});
// console.log(author1);
// Author.insertMany(author1, (err, author) => {
//     if (err) {
//       console.log("error: " + err);
//     }
//     console.log("added provided Book data", author);
//     mongoose.connection.close();
//   });

const author2 = new Author({
  name: "author2",
  age: "50",
  nationality: "saudi",
  image: "img",
  gender: "male",
  books: [book2],
});
// console.log(author1);
//   Author.insertMany(author2, (err, author) => {
//       if (err) {
//         console.log("error: " + err);
//       }
//       console.log("added provided Book data", author2);
//       mongoose.connection.close();
//     });

// Select:
// Author.find({}, (err, authors) => {
//   console.log(authors);
//   mongoose.connection.close();
// });

// Find all male authors
// Author.find({ gender: "male" }, (err, authors) => {
//   console.log(authors);
//   mongoose.connection.close();
// });

// Find all authors that age grater than 44
// Author.find({ age: { $gte: 44 } }, (err, authors) => {
//   console.log(authors);
//   mongoose.connection.close();
// });

// Find all authors in Kuwait country
// Author.find({ nationality: "kuwait" }, (err, authors) => {
//   console.log(authors);
//   mongoose.connection.close();
// });

// Find all the books that start with L or l
// Book.find({ title: /.*l*/ }, (err, books) => {
//   console.log(books);
//   mongoose.connection.close();
// });

// Find all the books that have pages more than 250

// Book.find({ pages: { $gte: 250 } }, (err, books) => {
//   console.log(books);
//   mongoose.connection.close();
// });

// Select with OR, AND
// Find all authors that in Kuwait or Saudi Arabia

// Author.find({ nationality: "kuwait", nationality: "saudi" }, (err, authors) => {
//   console.log(authors);
//   mongoose.connection.close();
// });

// Find all authors that have 3 books or more and their age grater than 35

// Author.find({ books:{$gte:3} , age: 35 }, (err, authors) => {
//   console.log(authors);
//   mongoose.connection.close();
// });

// Select by exists or does not exist
// Author do not have a key of age

// Author.find({ age: { $exists: true } }, (err, authors) => {
//   console.log(authors);
//   mongoose.connection.close();
// });

// Negative Selection
// Author are not from Saudi Arabia

// Author.find({ nationality: { $ne: 'saudi' } }, (err, authors) => {
//   console.log(authors);
//   mongoose.connection.close();
// });

// Update
// Update Osama Al Muslim age to be 45

// Author.findOneAndUpdate( {name:'Osama Al Muslim '},{age:45} , (err, authors) => {
//   console.log(authors);
//   mongoose.connection.close();
// });

// Remove
// Remove all book that have price less than 50
// Book.remove({ price: { $lt: 50 } }, (err, books) => {
//   console.log(books);
//   mongoose.connection.close();
// });

app.listen(3001);
