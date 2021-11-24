const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const seedAuther = require("./author_seed")
const seedBook = require("./book_seed")
const Book = require("./model/Book")
const Auther = require("./model/Author")

const URL = 'mongodb+srv://turki:turki@cluster0.rmy2j.mongodb.net/W08D03-HW?retryWrites=true&w=majority'
mongoose.connect(URL)
.then(console.log("connected to mongodb"))
.catch((err) => console.log(err));


// Book Scheme
// Book.insertMany(seedBook, (err, books) => {
//     if (err) { console.log(err) }
//     console.log("added provided books data", books)
//     mongoose.connection.close();
// });



// Auther Scheme
// Auther.insertMany(seedAuther, (err, authers) => {
//     if (err) { console.log(err) }
//     console.log("added provided books data", authers)
//     mongoose.connection.close();
// });



// hnsert New Book
// let newBook = {
//     title: 'Turki Haqawi',
//     pages: 200,
//     price: 20,
//     image: "https://www.jarir.com/cdn-cgi/image/fit=contain,width=400,height=400/https://www.jarir.com/media//catalog/product/4/4/448496.jpg?1"
//   }
// Book.insertMany(newBook, (err, book) => {
//     if(err) console.log(err);
//     mongoose.connection.close()
// })


// Insert Auther
// let newAuther = {
//     name: "Steve Job",
//     nationality: "UK",
//     image:
//       "https://www.alriyadh.com/media/article/2010/12/28/img/808263677439.jpg",
//     gender: "male",
//     books: [
//       {
//         title: "Apple",
//         pages: 200,
//         price: 30,
//         image:
//           "https://www.jarir.com/cdn-cgi/image/fit=contain,width=400,height=400/https://www.jarir.com/media//catalog/product/4/6/465531.jpg?1",
//       },
//     ],
// }
// Auther.insertMany(newAuther, (err, auther) => {
//     if(err) console.log(err);
//     mongoose.connection.close()
// })



// Find all male authors
// Auther.find({gender: "male"}, (err, authors) => {
//     console.log(authors);
//     mongoose.connection.close();
// }); 



// Find all authors that age grater than 44
// Auther.find({age: {$gt: 44}}, (err, authors) => {
//     console.log(authors);
//     mongoose.connection.close();
// }); 



// Find all authors in Kuwait country
// Auther.find({nationality: "Kuwait"}, (err, authors) => {
//     console.log(authors);
//     mongoose.connection.close();
// }); 



// Find all the books that start with L or l
// Book.find({title: /^l/i}, (err, books) => {
//     if(err) console.log(err);
//     mongoose.connection.close()
// })


// Find all the books that have pages more than 250
// Book.find({pages: {$gt: 250}}, (err, books) => {
//     console.log(books);
//     mongoose.connection.close();
// })


// Find all authors that in Kuwait or Saudi Arabia
// Auther.find({$or: [{nationality: "Kuwait"}, {nationality: "Saudi Arabia"}]}, (err, authors) => {
//     console.log(authors);
//     mongoose.connection.close()
// })


// Find all authors that have 3 books or more and their age grater than 35
// Auther.find({books: {$size: {$gte: 3}}, age: {$gt: 35}}, (err, authors) => {
//     console.log(authors);
//     mongoose.connection.close()
// })



// Author do not have a key of age
// Auther.find({age: {$exists: false}} , (err, authers) => {
//     console.log(authers);
//     mongoose.connection.close()
// })



// Author are not from Saudi Arabia
// Auther.find({nationality: {$ne: "Saudi Arabia"}} , (err, authers) => {
//     console.log(authers);
//     mongoose.connection.close()
// })


// Update Osama Al Muslim age to be 45
// Auther.updateOne({_id: '619cf2a4e1d3ad72c598a1ee'}, {$set: {age: 45}}, (err, auther) => {
//     console.log(auther);
//     mongoose.connection.close()
// })


// Remove all book that have price less than 50
// Book.deleteMany({price: {$lt: 50}}, (err, books) => {
//     console.log(books);
//     mongoose.connection.close()
// })


app.listen(PORT, () => console.log("Up to running"))