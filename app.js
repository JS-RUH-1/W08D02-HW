const express = require("express");
// const cors = require("cors");
const app = express();
const PORT = 3001;
const { number } = require("prop-types");
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    "mongodb+srv://Khaled:alh123@cluster0.8jrln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
}
main().catch((err) => console.log(err));

const Book = require("./models/bookAndAuthor").Book;
const Author = require("./models/bookAndAuthor").Author;
const seedAuthor = require("./author_seed");
const seedBook = require("./book_seed");

// Book.insertMany(seedBook, (err, books) => {
//   if (err){ console.log(err)}
//     console.log("added provided books data", books)
//     mongoose.connection.close();
//   });

//   app.listen(PORT, () => {
//     console.log(`Connected on= http://localhost:${PORT}`);
//   });

// ADD 2 Authors
// Author.insertMany(seedAuthor, (err, authors) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("added provided authors data", authors);
//   mongoose.connection.close();
// });

// ADD two More Authors
// Author.insertMany([
//   { name: "Arthur Conan Doyle",  age: 40,  nationality:"British" , image: "https://Conan.com" },
//   { name: "Agatha Christie", age: 50, nationality:"British" , image: "https://agatha.com" }
// ]);

// ADD two More Books
// Book.insertMany([
//   { title: "GOT", pages: 700, price: 50, image: "https://GOT.com" },
//   { title: "Les Misérables", pages: 800, price: 30, image: "https://Les Misérables.com" },
// ]);


// find  male authors
Author.find({gender: "male"}, (err, authors) => {
    console.log(
        "Male Authors",
        authors
    );
}); 
// Find Authors with age grater than 44
Author.find({age: {$gt: 44}}, (err, authors) => {
    console.log(
        "Authors with age grater than 44", 
        authors
    );
}); 
// Find all authors in Kuwait country
Author.find({nationality: "kuwait"}, (err, authors) => {
    console.log(
        "Kuwaity Author", 
        authors
    );
}); 

//Find all the books that start with L or l
Book.find({name: /^l/i}, (err, books) => {
    console.log(
        "Books starting with L (ignore case)", 
        books
    );
}); 

//Find all the books that have pages more than 250
Book.find({pages: {$gt : 250}}, (err, books) => {
    console.log(
        "books with more than 250 pages", 
        books
    );
}); 


//Find all authors that in Kuwait or Saudi Arabia
Author.find({$or: [{nationality: "Kuwait"}, {nationality: "Saudi Arabia"}]}, (err, authors) => {
    console.log(
        "Kuwaity OR Saudi", 
        authors
    );
}); 

//Find all authors that have 3 books or more and their age grater than 35
Author.find({books: {$size: {$gt: 3}}, age: {$gt: 35}}, (err, authors) => {
    console.log(
        "Authors with more than 3 books and older than 35", 
        authors
    );
}); 

// Select by exists or does not exist
Author.find({age: {$exists: true}}, (err, authors) => {
    console.log(
        "doesn't have a key of age", 
        authors
    );
}); 

// Negative Selection
Author.find({nationality: {$not: "Saudi Arabia"}}, (err, authors) => {
    console.log(
        "Author is not from Saudi Arabia", 
        authors
    );
}); 

// Update
Author.updateOne({name: "Osama Al Muslim"}, {$set: {age: 45}}, (err, authors) => {
    console.log(
        "Update Osama Al Muslim age to be 45", 
        authors
    );
}); 

// Remove
Book.deleteMany({price: {$lt: 50}}, (err, res) => {
    console.log(
        "Remove all book that have price less than 50",
        res
    );
}); 
