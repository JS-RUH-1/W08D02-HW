const mongoose = require('mongoose');
const Book = require("./Models/bookAndAuther").Book
const Auther = require("./Models/bookAndAuther").Auther
const Aseed = require("./author_seed")
const Bseed = require("./book_seed")

//
const uri = 'mongodb+srv://alanoud:1418@cluster0.anylu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true, useUnifiedTopology: true
});
const connection = mongoose.connection
connection.once('open', () => console.log('Connected to DB'),
  connection.on('disconnected', () => console.log('mongo disconnected')),
  connection.on('error', err => { console.log('connection error', err) }))


Book.insertMany(Bseed, (err, books) => {
  if (err) { console.log(err) }
  console.log("added provided books data", books)
  mongoose.connection.close();
});

Auther.insertMany(Aseed, (err, auther) => {
  if (err) { console.log(err) }
  console.log("added auther", auther)
  mongoose.connection.close();
})

//****2 NEW AUTHER****//

Auther.insertMany([
  {
    name: "Jennifer Lee",
    age: 50,
    nationality: "American",
    image: "https://m.media-amazon.com/images/M/MV5BODIzNzYxMDg0MF5BMl5BanBnXkFtZTgwMDIwMDA5NzM@._V1_.jpg",
    gender: "female",
    books: [
      {
        title: "The Art of Wreck-It Ralph",
        pages: 160,
        price: 17,
        image: "https://images-na.ssl-images-amazon.com/images/I/51hQhriiEfL._SY413_BO1,204,203,200_.jpg",
      },
    ]
  },
  {
    name: "Tana French",
    age: 48,
    nationality: "American-Irish",
    image: "https://images.gr-assets.com/authors/1535655031p8/138825.jpg",
    gender: "female",
    books: [
      {
        title: "In the Woods",
        pages: 496,
        price: 100,
        image: "https://images-na.ssl-images-amazon.com/images/I/51BR5oVaZPL._SX324_BO1,204,203,200_.jpg",
      },
    ]
  }],
  (err, auther) => {
    if (err) { console.log(err) }
    console.log("Auther added", auther)
    mongoose.connection.close();
  }
)

//****ALL MALE AUTHERS****//

Auther.find({ gender: "male" }, (err, books) => {
  if (err) { console.log(err) }
  console.log("added provided books data", books)
  mongoose.connection.close();
})

//****all authors that age grater than 44****//

Auther.find({ age: { $gt: 44 } }, (err, books) => {
  if (err) { console.log(err) }
  console.log("all authors that age grater than 44", books)
  mongoose.connection.close();
})

//****all authors in Kuwait country****//

Auther.find({ nationality: "Kuwait" }, (err, books) => {
  if (err) { console.log(err) }
  console.log("all authors in Kuwait country", books)
  mongoose.connection.close();
})

//****all the books that start with L or l****//

Book.find({ title: { $regex: /^l/, $options: 'i' } }, (err, books) => {
  if (err) { console.log(err) }
  console.log("all the books that start with L or l", books)
  mongoose.connection.close();
})

//***all the books that have pages more than 250***//

Book.find({ pages: { $gt: 250 } }, (err, books) => {
  if (err) { console.log(err) }
  console.log("all the books that have pages more than 250", books)
  mongoose.connection.close();
})

//***all authors that in Kuwait or Saudi Arabia***//

Auther.find({ $or: [{ nationality: "Kuwait" }, { nationality: "Saudi Arabia" }] }, (err, books) => {
  if (err) { console.log(err) }
  console.log("all the books that have pages more than 250", books)
  mongoose.connection.close();
})

//*** all authors that have 3 books or more and their age grater than 35***//

Auther.find({ $and: [{ books: { $size: 3 } }, { age: { $gt: 35 } }] }, (err, books) => {
  if (err) { console.log(err) }
  console.log(" all authors that have 3 books or more and their age grater than 35", books)
  mongoose.connection.close();
})

//*** Author do not have a key of age***//

Auther.find({ age: { $exists: false } }, (err, books) => {
  if (err) { console.log(err) }
  console.log("Author do not have a key of age", books)
  mongoose.connection.close();
})

//*** Author are not from Saudi Arabia***//

Auther.find({ nationality: { $ne: "Saudi Arabia" } }, (err, books) => {
  if (err) { console.log(err) }
  console.log("Author are not from Saudi Arabia", books)
  mongoose.connection.close();
})

//*** Update Osama Al Muslim age to be 45***//

Auther.updateOne({ name: "Osama Al Muslim" }, { $set: { age: 45 } }, (err, books) => {
  if (err) { console.log(err) }
  console.log("Update Osama Al Muslim age to be 45", books)
  mongoose.connection.close();
})

//*** Remove all book that have price less than 50***//

Book.deleteMany({ price: { $lt: 50 } }, (err, books) => {
  if (err) { console.log(err) }
  console.log("Remove all book that have price less than 50", books)
  mongoose.connection.close();
})