const mongoose = require("mongoose");
const { Book, Author } = require("./models/schema");
const seedBook = require("./book_seed");
const seedAuther = require("./author_seed");

const url =
  "mongodb+srv://yazeed1122:yazeed1122@mangodb.ju3ap.mongodb.net/myFirstdb?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Hello Yazeed");
  })
  .catch((e) => {
    console.log("bey Yazeed");
  });

// Book.insertMany(seedBook, (err, books) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("added provided books data", books);
//   mongoose.connection.close();
// });

// Author.insertMany(seedAuther, (err, authers) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("added provided authers data", authers);
//   mongoose.connection.close();
// });

// Author.insertMany({
//     name:'mohammed',
//     age:34,
//     nationality: "Saudi Arabia",
//     image: "https://adab-news.com/wp-content/uploads/2020/01/Capture.jpg",
//     gender: "male",
//     books:[{
//         title:'hello Word',
//         pages:102,
//         price:159,
//         image:
//           "https://www.jarir.com/cdn-cgi/image/fit=contain,width=400,height=400/https://www.jarir.com/media//catalog/product/5/6/568335.jpg?1",
//       }

//     ]

// },(err,authers)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("added provided authers data", authers);
//     mongoose.connection.close()

// })

// let newBook = {

//         title: 'Ahmed',
//         pages: 200,
//         price: 500,
//         image: "https://www.jarir.com/cdn-cgi/image/fit=contain,width=400,height=400/https://www.jarir.com/media//catalog/product/4/4/448496.jpg?1"

// }

// Book.insertMany(newBook,(err,books)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("added provided books data", books);
//         mongoose.connection.close()
//     }
// })

// Find all male authors

// Author.find({gender:'male'},(err,data)=>{
//     if(err){
//         console.log(err);
//     }console.log(data);
//     mongoose.connection.close()
// })

// Find all authors that age grater than 44

// Author.find({age:{$gt:44}},(err,data)=>{
//         if(err){
//             console.log(err);
//         }console.log(data);
//         mongoose.connection.close()
//     })

//  Find all authors in Kuwait country

// Author.find({nationality:"Kuwait" },(err,data)=>{
//             if(err){
//                 console.log(err);
//             }console.log(data);
//             mongoose.connection.close()
//         })

// Find all the books that start with L or l

// Book.find({title:/^L/i}||{title:/^l/i},(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }console.log(data);
//                 mongoose.connection.close()
//             })

// Find all the books that have pages more than 250

// Book.find({pages:{$gt:250}},(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }console.log(data);
//                 mongoose.connection.close()
//             })

// Select with OR, AND

// Find all authors that in Kuwait or Saudi Arabia

// Author.find(
//   { $or: [{ nationality: "Saudi Arabia"}, {nationality: "Kuwait" }] },

//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);
//     mongoose.connection.close();
//   }
// );

// Find all authors that have 3 books or more and their age grater than 3

// size to calculate num of books

// Author.find(
//   { $and: [{ $size: { $gte: 3 } }, { age: { $gt: 35 } }] },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);
//     mongoose.connection.close();
//   }
// );

// Select by exists or does not exist

// Author do not have a key of age

// Author.find({age:{$exists:false}},(err, data) => {
//         if (err) {
//           console.log(err);
//         }
//         console.log(data);
//         mongoose.connection.close();
//       }
//     );

// Negative Selection'

// Author are not from Saudi Arabia

// here i use $nin to git all Author exsept Saudi Arabia

// Author.find({ nationality: {$nin: ["Saudi Arabia" ]} },(err, data) => {
//             if (err) {
//               console.log(err);
//             }
//             console.log(data);
//             mongoose.connection.close();
//           }
//         );

// Update

// Update Osama Al Muslim age to be 45

// Author.updateOne(
//   { name: "Osama Al Muslim" },
//   { $set: { age: 45 } },

//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);
//     mongoose.connection.close();
//   }
// );

// Remove

// Remove all book that have price less than 50

// Book.deleteMany({ price: { $lt: 50 } }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
//   mongoose.connection.close();
// });
