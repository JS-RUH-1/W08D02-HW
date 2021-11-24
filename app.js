const express =require("express")
const app=express()
const authors = require('./model/Author')
const books = require('./model/book')
const bookSeed = require('./book_seed')
const authorSeed = require('./author_seed')
const PORT = process.env.PORT ||5000


const mongoose=require('mongoose')
const URL= 'mongodb+srv://abrar_alzh:719719@cluster0.abt43.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(URL)
.then(console.log(""))


// Add2 new book
// books.insertMany(bookSeed, (err, books) => {
//   if (err){ console.log(err)}
//     console.log("added provided books data", books)
//     mongoose.connection.close();
//   });

//   books.insertMany([
//       { title: 'Java programming', 
//       pages: 1000, 
//       price: 300, 
//       image: "https://th.bing.com/th/id/R.51d61ce15cbd8fdddba6da81d35c07b5?rik=jutwxlWSzg%2bt4Q&pid=ImgRaw&r=0"},
//       {
//         title: 'system analysis ', 
//         pages: 2000, 
//         price: 100, 
//         image: "https://www.oreilly.com/library/view/systems-analysis-and/9781118037423/images/MyCoverImage.jpg"}

//       ]);
    



//   authors.insertMany(authorSeed, (err, authors) => {
//     if (err){ console.log(err)}
//       console.log("added provided books data", authors)
//       mongoose.connection.close();
//     });
  

// Add2 new author
//     authors.insertMany([
//     {name:"faisal" , age:"32" , nationality: "Saudi Arabia", image: "https://adab-news.com/wp-content/uploads/2020/01/Capture.jpg",
//     gender: "male" },
//     {name:"abrar" , age:"25" , nationality: "Saudi Arabia", image: "https://adab-news.com/wp-content/uploads/2020/01/Capture.jpg",
//     gender: "female" },

    
// ]);
        
//Find all male authors
// authors.find({gender: "male"}, (err, authors) => {
//     console.log("all male authors",authors);
// }); 

// // Find all authors that age grater than 44
// authors.find({age:{$gt:44}}, (err, authors) => {
//     console.log("all authors that age grater than 44",authors);
// }); 

// //Find all authors in Kuwait country
// authors.find({nationality:"Kuwait"}, (err, authors) => {
//     console.log("all authors in Kuwait country",authors);
// }); 

// // Find all the books that start with L or l
// books.find({name:/^L/l}, (err, books) => {
//     console.log("all the books that start with L or l",books);
// }); 


// // Find all the books that have pages more than 250
// books.find({pages:{gt:250}}, (err, books) => {
//     console.log("all the books that start with L or l",books);
// }); 


// //Find all authors that in Kuwait or Saudi Arabia
// authors.find({$or:[{nationality:"Kuwait"} , {nationality:"Saudi Arabia"}]}, (err, authors) => {
//     console.log("all authors that in Kuwait or Saudi Arabia",authors);
// }); 

// //Find all authors that have 3 books or more and their age grater than 35
// authors.find({books:{$size:{$gt:3}} , age : {$gt:35}}, (err, authors) => {
//     console.log(" authors that have 3 books or more and their age grater than 35",authors);
// });

//Author do not have a key of age
// authors.find({age: {$exists: true}}, (err, authors) => {
//     console.log("do not have a key of age",authors);
// }); 

// Author are not from Saudi Arabia
// authors.find({nationality: {$not: "Saudi Arabia"}}, (err, authors) => {
//     console.log("Author are not from Saudi Arabia", authors );
// }); 

// Update Osama Al Muslim age to be 45
// authors.updateOne({name: "Osama Al Muslim"}, {$set: {age: 45}}, (err, authors) => {
//     console.log("Update Osama Al Muslim age to be 45", authors);
// }); 

//Remove all book that have price less than 50
books.deleteMany({price: {$lt: 50}} , (err, books) => {
  if (err){ console.log(err)}
    console.log("Remove all book that have price less than 50", books)
  });



app.listen(PORT, () => console.log("up"))