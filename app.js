const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://project_user:bgt55tgb@cluster0.qdmbx.mongodb.net?retryWrites=true&writeConcern=majority');

const seedBook = require("./book_seed");
const seedAuthor = require("./author_seed");
const Author = require('./models/author');
const Book = require('./models/book');

Author.insertMany(seedAuthor, (err, authors) => {
  if (err){ console.log(err)}
    console.log("Data added from seed", authors)
    mongoose.connection.close();
});

Author.insertMany([
    {
        name: "Author 1",
        age: 27,
        image:"<IMG LINK>",
        nationality: "Saudi Arabia"
    },
    {
        name: "Ahmed",
        age: 25,
        image:"<IMG LINK>",
        nationality: "Kuwait"
    }
]);

Book.insertMany([
    {
        title: "example 1",
        pages: 250,
        price: 27,
        image:"<IMG LINK>"
    },
    {
        title: "example 2",
        pages: 250,
        price: 27,
        image:"<IMG LINK>"
    }
]);
Author.find({gender: "male"}, (err, authors) => {
    console.log(
        "All male",
        authors
    );
}); 
Author.find({age: {$gt: 44}}, (err, authors) => {
    console.log(
        "all authors that age grater than 44", 
        authors
    );
}); 
Author.find({nationality: "kuwait"}, (err, authors) => {
    console.log(
        "Kuwait", 
        authors
    );
}); 

Book.find({name: /^l/i}, (err, books) => {
    console.log(
        "starts with L or l", 
        books
    );
}); 

Book.find({pages: {$gt : 250}}, (err, books) => {
    console.log(
        "books with +250 pages", 
        books
    );
}); 

Book.find({pages: {$gt : 250}}, (err, books) => {
    console.log(
        "books with +250 pages", 
        books
    );
}); 

Author.find({$or: [{nationality: "Kuwait"}, {nationality: "Saudi Arabia"}]}, (err, authors) => {
    console.log(
        "Saudi & Kuwait aythors", 
        authors
    );
}); 


Author.find({books: {$size: {$gt: 3}}, age: {$gt: 35}}, (err, authors) => {
    console.log(
        "Authors with more than 3 books and age >= 35", 
        authors
    );
}); 


Author.find({age: {$exists: true}}, (err, authors) => {
    console.log(
        "age key not exist", 
        authors
    );
}); 

Author.find({nationality: {$not: "Saudi Arabia"}}, (err, authors) => {
    console.log(
        "not from Saudi Arabia", 
        authors
    );
}); 

Author.updateOne({name: "Osama Al Muslim"}, {$set: {age: 45}}, (err, authors) => {
    console.log(
        "Update Osama Al Muslim age 45", 
        authors
    );
}); 

Book.deleteMany({price: {$lt: 50}}, (err, res) => {
    console.log(
        "Remove all books with price than 50",
        res
    );
}); 