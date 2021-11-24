const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookAndAuthor').Book;
const Author = require('./models/bookAndAuthor').Author;
const seedBook = require('./book_seed');
const seedAuthor = require('./author_seed');
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb+srv://admin:js-ruh2021@js.cj74d.mongodb.net/test?retryWrites=true&w=majority');

}

// Book.insertMany(seedBook, (err, books) => {
//     if(err){ console.log(err) };
//     console.log("Provided book data are added", books);
//     mongoose.connection.close;
// })

// Author.insertMany(seedAuthor, (err, authors) => {
//     if(err){ console.log(err) }
//     console.log("Provided author data are added", authors)
// })


//// Add at least 2 new author and book

/*
let new_author = [
    {
        name: "Ali Altantawi",
        age: null,
        nationality: "Syria",
        image: "https://upload.wikimedia.org/wikipedia/ar/7/79/Sheikh_Ali_Al-Tantawi.jpg",
        gender: "male",
        books: [
            {
                title: "Qesas min alhayah",
                pages: 304,
                price: 40,
                image: "https://www.jarir.com/cdn-cgi/image/fit=contain,width=400,height=400/https://www.jarir.com/media//catalog/product/4/8/48474.jpeg?1"
            }
        ]
    },
    {
        name: "Ahmad Amin",
        age: null,
        nationality: "Eygpt",
        image: "https://ar.wikipedia.org/wiki/%D9%85%D9%84%D9%81:Ahmad_Amin.jpg",
        gender: "male",
        books: [
            {
                title: "Hayati",
                pages: 222,
                price: 30,
                image: "https://www.jarir.com/cdn-cgi/image/fit=contain,width=400,height=400/https://www.jarir.com/media//catalog/product/4/4/443839.jpg?1"
            }
        ]
    }
]

let new_book = [
    {
        title: "Qesas min alhayah",
        pages: 304,
        price: 40,
        image: "https://www.jarir.com/cdn-cgi/image/fit=contain,width=400,height=400/https://www.jarir.com/media//catalog/product/4/8/48474.jpeg?1"
    },
    {
        title: "Hayati",
        pages: 222,
        price: 30,
        image: "https://www.jarir.com/cdn-cgi/image/fit=contain,width=400,height=400/https://www.jarir.com/media//catalog/product/4/4/443839.jpg?1"
    }
]

Author.insertMany(new_author, (err, new_authors) => {
    if(err){ console.log(err) }
    console.log("New author data are added", new_authors)
})

Book.insertMany(new_book, (err, new_books) => {
    if(err){ console.log(err) }
    console.log("New book data are added", new_books)
})
*/


//// Find all male authors
/*
Author.find({gender:"male"}, (err, authors)=> {
    console.log(authors);
    mongoose.connection.close;
})
*/


//// Find all authors that age grater than 44
/*
Author.find({age: {$gt: 44}}, (err, authors)=> {
    console.log(authors);
    mongoose.connection.close;
})
*/


//// Find all authors in Kuwait country
/*
Author.find({nationality: "Kuwait"}, (err, authors)=> {
    console.log(authors);
    mongoose.connection.close;
})
*/


//// Find all the books that start with L or l
/*
Book.find({title: {$regex: /^l/i}}, (err, Books)=> {
    console.log(Books);
    mongoose.connection.close;
})
*/


//// Find all the books that have pages more than 250
/*
Book.find({pages: {$gt: 250}}, (err, Books)=> {
    console.log(Books);
    mongoose.connection.close;
})
*/


//// Find all authors that in Kuwait or Saudi Arabia
/*
Author.find({$or: [{nationality:"Kuwait"}, {nationality:"Saudi Arabia"}]}, (err, authors)=> {
    console.log(authors);
    mongoose.connection.close;
})
*/


//// Find all authors that have 3 books or more and their age grater than 35
/*
Author.find({$and: [{age: {$gt: 35}},{"books.2": {$exists: true}}]}, (err, authors)=> {
    if(err){console.log(err)}
    console.log(authors);
    mongoose.connection.close;
})
*/


//// Select by exists or does not exist: Author do not have a key of age
/*
Author.exists({age: ""}, (err, answer) => {
    if(answer){
        console.log("Exist")
    }else{
        console.log("Doesn't exist")
    }
    mongoose.connection.close;
})
*/


//// Negative Selection: Author are not from Saudi Arabia
/*
Author.find({nationality: {$ne: "Saudi Arabia"}}, (err, authors) => {
    if(err){  console.log(err) }
    console.log(authors)
    mongoose.connection.close;
})
*/


//// Update Osama Al Muslim age to be 45
/*
Author.updateOne({name: "Osama Al Muslim"}, {age: 45}, (err, res) => {
    if(err){ console.log(err) }
    console.log("Selected document is updated", res);
})
*/


//// Remove all book that have price less than 50
/*
Book.deleteMany({price: {$lt: 50}}, (err, res)=>{
    if(err){ console.log(err) }
    console.log(res)
    mongoose.connection.close()
})
*/

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})