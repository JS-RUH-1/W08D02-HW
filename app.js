const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://riyadhtickets:T123123123@cluster0.tn6wn.mongodb.net/W08D03HW?authSource=admin&retryWrites=true&w=majority');

const seedBook = require("./book_seed");
const seedAuthor = require("./author_seed");
const Author = require('./models/author');
const Book = require('./models/book');

// book insertMany
// Book.insertMany(seedBook, (err, books) => {
//   if (err){ console.log(err)}
//     console.log("added provided books data", books)
//     mongoose.connection.close();
// });
Author.insertMany(seedAuthor, (err, authors) => {
  if (err){ console.log(err)}
    console.log("added provided authors data", authors)
    mongoose.connection.close();
});

// Add at least 2 new author and book
Author.insertMany([
    {name: "Emad",
    age: 27,
    image:"https://someimg.com"
    },
    {name: "Ahmed",
    age: 25,
    image:"https://someimg.com"
    }
]);

Book.insertMany([
    {title: "example 1",
    pages: 250,
    price: 27,
    image:"https://someimg.com"
    },
    {title: "example 2",
    pages: 250,
    price: 27,
    image:"https://someimg.com"
    }
]);
// find all male
Author.find({gender: "male"}, (err, authors) => {
    console.log(
        "All male",
        authors
    );
}); 
// Find all authors that age grater than 44
Author.find({age: {$gt: 44}}, (err, authors) => {
    console.log(
        "all authors that age grater than 44", 
        authors
    );
}); 
// Find all authors in Kuwait country
Author.find({nationality: "kuwait"}, (err, authors) => {
    console.log(
        "Kuwait", 
        authors
    );
}); 

//Find all the books that start with L or l

Book.find({name: /^l/i}, (err, books) => {
    console.log(
        "starts with L or l", 
        books
    );
}); 

//Find all the books that have pages more than 250
Book.find({pages: {$gt : 250}}, (err, books) => {
    console.log(
        "books with +250 pages", 
        books
    );
}); 

//Find all the books that have pages more than 250
Book.find({pages: {$gt : 250}}, (err, books) => {
    console.log(
        "books with +250 pages", 
        books
    );
}); 

//Find all authors that in Kuwait or Saudi Arabia
Author.find({$or: [{nationality: "Kuwait"}, {nationality: "Saudi Arabia"}]}, (err, authors) => {
    console.log(
        "Kuwait OR Saudi", 
        authors
    );
}); 

//Find all authors that have 3 books or more and their age grater than 35

Author.find({books: {$size: {$gt: 3}}, age: {$gt: 35}}, (err, authors) => {
    console.log(
        "Authors with +3 books and age +35", 
        authors
    );
}); 

// Select by exists or does not exist

Author.find({age: {$exists: true}}, (err, authors) => {
    console.log(
        "do not have a key of age", 
        authors
    );
}); 

// Negative Selection
Author.find({nationality: {$not: "Saudi Arabia"}}, (err, authors) => {
    console.log(
        "are not from Saudi Arabia", 
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