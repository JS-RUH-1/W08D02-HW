const express = require('express')
const app = express();
const PORT = 8080;
const mongoose = require('mongoose')
const seedBook = require("./book_seed");
const seedAuthor = require("./author_seed");

app.use(express.json());
main().catch(err => console.log(err));

//connect to db 
// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/test');
//   }

  const BookSchema = new mongoose.Schema({
    title:{ 
        type: String,
        required: [true, "Book title should be provided"]
    }, 
    pages:{
        type:Number,
        required: [true, "Book pages should be provided"]
    },
    price:{
        type:Number,
        default:0   
    },
    image:{
        type:String,
        required: [true, "Author image should be provided"]},
})
const Author = new mongoose.Schema({
    name:{ 
        type: String,
        required: [true, "Author name should be provided"]},
    age:{type:Number},
    nationality:{
        type:String,
        required: [true, "Author nationality should be provided"]},
    image:{
        type:String,
        required: [true, "Author image should be provided"]},

    gender:{
        type:String
    },
    books:[BookSchema]

});

const Author1 = mongoose.model('Author',Author);
// Add at least 2 new author and book
Author1.insertMany([
    {name: "Masha",
    age: 27,
    image:"https://i.pinimg.com/236x/e2/42/87/e2428726562e32b13e6e7b3adeb2be78.jpg",
    nationality: "Saudi Arabia",
    gender:"female"
    },
    {name: "ghadah",
    age: 24,
    image:"https://i.pinimg.com/236x/e2/42/87/e2428726562e32b13e6e7b3adeb2be78.jpg",
    nationality: "Saudi Arabia",
    gender:"female"
    }
]);

Author1.find({gender:"male"}, (err, authors) => {
    console.log(authors);
    });
 Author1.find({age:{$exists: false}}, (err, authors) => {
        console.log(authors);
        });

Author1.find({age:{$gt:44}}, (err, authors) => {
    console.log(authors);
    });
Author1.find({nationality:"Kuwait"}, (err, authors) => {
        console.log(authors);
        });

 Author1.find({$or: [{nationality: "Kuwait"}, {nationality: "Saudi Arabia"}]}, (err, authors) => {
            console.log(authors);
            });
Author1.find({$and:[{books: {$size:3}, age: {$gt: 35}}]}, (err, authors) => {
                console.log(authors);
                });

Author1.find({nationality:{$nin:"Saudi Arabia"}}, (err, authors) => {
                    console.log(authors);
                    })  
Author1.update({name: "Osama Al Muslim"},{$set: {age: 45}} ,(err, authors) => {
                        console.log(authors);
                        })  
const Books = mongoose.model('books',BookSchema);

Books.find({title:/^L/i}, (err, Books) => {
    console.log(Books);
    });

Books.find({pages:{$gt:250}}, (err, Books) => {
        console.log(Books);
        });

Books.remove({price:{$lt: 50}}, (err, Books) => {
            console.log(Books);
            });

Books.insertMany([
    {
    title: "example 1",
    pages: 400,
    price: 14,
    image:"https://i.pinimg.com/236x/e2/42/87/e2428726562e32b13e6e7b3adeb2be78.jpg"
    },
    {title: "example 2",
    pages: 200,
    price: 280,
    image:"https://i.pinimg.com/236x/e2/42/87/e2428726562e32b13e6e7b3adeb2be78.jpg"
    }
]);


  



// app.listen(PORT, ()=>{
//     console.log(`Connected to= http://localhost:${PORT}`)
// })