const mongoose = require('mongoose')
const express = require("express");
const app = express();
const PORT = 3001;
const Book = require("./models/book.modul");
const Author = require("./models/author.model");
const seedBook = require("./book_seed");
const seedAuthor = require("./author_seed");

app.use(express.json());

const uri='mongodb+srv://marah:1234@cluster0.qvqkq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri,{
useNewUrIParser: true,useUnifiedTopology:true
});


////////////////////////////////////////////////////////

// Book.insertMany(seedBook, (err, Book) =>{
//     if (err){
//         console.log(err);
//     }
//     console.log("added provided books data", books)
//     mongoose.connection.close();
// })

// Author.insertMany(seedAuthor, (err,Author ) =>{
//     if (err){
//         console.log(err);
//     }
//     console.log("added provided authors data", authors)
// } )

//////////////////////////////////////////////////////////


// Atomic Habits 
// James Clear
//https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8479/9781847941831.jpg

// Book.insertMany([{
//     title:"Atomic Habits ",
//     pages:2225,
//     price:24,
//     image:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8479/9781847941831.jpg"
// },
// {
//     title:"Murder on the Orient Express",
//     pages:2225,
//     price:24,
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZy4vXbrJ2f4TxanBmMIhR21x8gph6qOweA&usqp=CAU"
// }],
// (err, data)=>{
//     if (err) console.log(err);
//     console.log("added provided books data", data);
// }
// ),
// Author.insertMany(
//   [
//     {
//       name: "James Clear",
//       age: 22,
//       nationality: "Saudi Arabia",
//       gender: "male",
//       image: "none",
//     },
//     {
//       name: "Agatha Christie",
//       age: 24,
//       nationality: "Saudi Arabia",
//       gender: "female",
//       image: "none",
//     },
//   ],
//   (err, Authors) => {
//     if (err) console.log(err);
//     console.log("added provided authors data", Authors);
//   }
// );

//Murder on the Orient Express
//Agatha Christie 
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZy4vXbrJ2f4TxanBmMIhR21x8gph6qOweA&usqp=CAU

//////////////////////////////////////////////////////////

Authors.find({gender: "male"},  (err, Authors) => {
    if (err) console.log(err);
    console.log("added provided authors data", Authors);
  });


  Author.find({ age: { $gt: 44 } }, (err, authors) => {
    if (err) console.log(err);
    console.log(authors);
  });



  Author.find({ nationality: "Kuwait" }, (err, authors) => {
    if (err) console.log(err);
    console.log(authors);
  });

  Book.find({ title: /^[l]+/i }, (err, data) => {
    console.log(data);
  });
  

  Book.find({ pages: { $gt: 250 } }, (err, data) => {
    console.log(data);
  });

  //////////////////////////////////////////////////////////////

  Author.find(
    { $or: [{ nationality: "Kuwait" }, { nationality: "Saudi Arabia" }] },
    (err, data) => {
      if (err) console.log(err);
      console.log(data);
    }
  );


  Author.find(
    { $and: [{ age: { $gt: 35 } }, { $where: "this.books.length >= 3" }] },
    (err, data) => {
      if (err) console.log(err);
      console.log(data);
    }
  );

////////////////////////////////////////////////////////////////////////////////////
// do not have a key of age
Author.find({ age: { $exists: false } }, (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });



  //not from Saudi Arabia

  Author.find({ nationality: { $ne: "Saudi Arabia" } }, (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });

 // Update Osama Al Muslim age to be 45

  Author.updateOne({ name: "Osama Al Muslim" }, { age: 45 }, (err, data) => {
    if (err) console.log(err);
    console.log(data);

   // Remove all book that have price less than 50

Book.deleteMany({ price: { $lt: 50 } }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});


const connection = mongoose.connection
connection.once('open', () => console.log('Connected to DB'),
connection.on('disconnected', () => console.log('mongodisconnected')),
connection.on('error', err => {console.log('connection error', err)}));

app.listen(PORT, () => {
    console.log(`Connected on= http://localhost:${PORT}`);
  });
