const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const seedBook = require("./book_seed");
const seedAuthor = require("./author_seed");
const Author = require("./Models/bookAndAuther").Author;
const Book = require("./Models/bookAndAuther").Book;


const uri = 'mongodb+srv://NouraSaad:NNooorraaa123@cluster0.qhmyx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {
useNewUrlParser: true, useUnifiedTopology: true
});

const connection = mongoose.connection
connection.once('open', () => console.log('Connected to DB'),
connection.on('disconnected', () => console.log('mongo disconnected')),
connection.on('error', err => {console.log('connection error', err)}))



//Insert Book and Author:

Book.insertMany(seedBook, (err, books) => {
  if (err){ console.log(err)}
    console.log("added provided books data", books)
    mongoose.connection.close();
  });

Author.insertMany(seedAuthor, (err, authors) => {
  if (err) {console.log(err);}
  console.log("added provided authors data", authors)
  mongoose.connection.close();
});

//Add at least 2 new author and book

Author.insertMany([
  { name: "William Shakespeare",  age: 80,  nationality:"British" , image: "https://en.wikisource.org/wiki/Author:William_Shakespeare_(1564-1616)#/media/File:Shakespeare.jpg", gender: "male" ,
   books: [{title:"ΤΗΕ ΤEMPEST",pages:50,image:"https://ΤΗΕΤEMPEST.com"}]},
  { name: "Emily Dickinson", age: 50, nationality:"British" , image: "https://en.wikisource.org/wiki/Author:Emily_Dickinson#/media/File:Emily_Dickinson_daguerreotype_(Restored).jpg", gender: "female",
   books: [{ title: "POEMS", pages: 152, price: 60, image: "https://POEMS.com" }]}
]);


Book.insertMany([
  { title: "ΤΗΕ ΤEMPEST", pages: 200, price: 50, image: "https://ΤΗΕΤEMPEST.com" },
  { title: "POEMS", pages: 152, price: 60, image: "https://POEMS.com" },
]);


// find  male authors

Author.find({gender: "male"}, (err ,authors) => {
    console.log("Male Authors",authors);}); 

// Find Authors with age grater than 44

Author.find({age: {$gt: 44}}, (err, authors) => {
    console.log("Authors with age grater than 44", authors);}); 

// // Find all authors in Kuwait country

Author.find({nationality: "Kuwait"}, (err, authors) => {
    console.log("Kuwait Author", authors);}); 

// //Find all the books that start with L or l

Book.find({title: /^l/i}, (err, books) => {
    console.log("Books starting with L (ignore case)", books);}); 

// //Find all the books that have pages more than 250

Book.find({pages: {$gt : 250}}, (err,books) => {
    console.log("books with more than 250 pages", books)}); 


// //Find all authors that in Kuwait or Saudi Arabia

Author.find({$or: [{nationality: "Kuwait"}, {nationality: "Saudi Arabia"}]}, (err, authors) => {
    console.log("Kuwaity OR Saudi", authors);}); 

// //Find all authors that have 3 books or more and their age grater than 35

Author.find({$and: [{books: {$size: 3}}, {age: {$gt: 35}}]}, (err, authors) => {
    console.log("Authors with more than 3 books and older than 35",authors);}); 

// //Do not have a key of age

Author.find({age: {$exists: false}}, (err, authors) => {
    console.log("doesn't have a key of age",authors);}); 

// //Are not from Saudi Arabia

Author.find({nationality: {$ne: "Saudi Arabia"}}, (err, authors) => {
    console.log("Author is not from Saudi Arabia",authors);}); 

// //Update Osama Al Muslim age to be 45

Author.updateOne({name: "Osama Al Muslim"}, {$set: {age: 45}}, (err, authors) => {
    console.log("Update Osama Al Muslim age to be 45",authors);}); 

// //Remove all book that have price less than 50

Book.deleteMany({price: {$lt: 50}}, (err, books) => {
    console.log("Remove all book that have price less than 50",books);});