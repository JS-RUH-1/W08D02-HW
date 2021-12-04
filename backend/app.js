const express= require("express")
const mongoose = require('mongoose');
const seedBook = require("./book_seed")
const seedAuthor = require("./author_seed")
const Author = require("./models/authorAndBookSchema ").Author
const Book = require("./models/authorAndBookSchema ").Book;
const app = express();
const AuthorRouter= require("./routes/AuthorRouter")
const BookRouter= require("./routes/BookRouter")
const cors = require("cors") 
const auth=require('./routes/authRout')
const cookieParser =require("cookie-parser")
const {requireAuth, checkUser}=require("./midleware/authMidleware")





app.use(cors());
app.use("/api/Author",AuthorRouter);
app.use("/api/Book",BookRouter);
app.use(auth);
app.use(cookieParser())
app.use(requireAuth)
app.use(express.json())
app.get("*", checkUser)


const uri = 'mongodb+srv://HendFawaz:fawaz9080-@cluster0.8fojf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection
connection.once('open', () => console.log('Connected to DB'),
connection.on('disconnected', () => console.log('mongo disconnected')),
connection.on('error', err => {console.log('connection error', err)}))





// cooki 

app.get('/set-cookies', (res,req)=>{
    res.cookie("newUser", false)
    res.cookie("isEmployee", true, {maxAge: 1000 * 60 * 60 * 24 , httpOnly: true})

    res.send("you got the cookies !")

});

app.get("/read-cookies", (res,req)=>{
    const cookise = req.cookise
    console.log(cookise)
    res.json(cookise)
})




// Book.insertMany(seedBook, (err, books) => {
//   if (err){ console.log(err)}
//     console.log("added provided books data", books)
//     mongoose.connection.close();
//   });

// Author.insertMany(seedAuthor, (err, Author) => {
//   if (err){ console.log(err)}
//     console.log("added provided Author data", Author)
//     mongoose.connection.close();
//   });

//   Author.insertMany([
//     { name: "Agatha Kristy",  age: 98,  nationality:"British" , image: "https://Agatha.jpg", gender: "male" ,
//      books: [{title:"ΤΗΕ Crimnal",pages:55,image:"https://xn-crimnal.com"}]},
//     { name: "Alanoud", age: 90, nationality:"English" , image: "https://Alanoud.jpg", gender: "female",
//      books: [{ title: "Error", pages: 152, price: 79, image: "https://problemserver.com" }]}
//   ]);
//   Book.insertMany([
//     { title: "ΤΗΕ Crimnal", pages: 200, price: 50, image: "https://xn-crimnal.com" },
//     { title: "Error", pages: 152, price: 60, image: "https://problemserver.com" },
//   ]);

// Author.find({gender: "male"}, (err ,authors) => {
//     console.log("Male Authors",authors);});


// // Find Authors with age grater than 44

// Author.find({age: {$gt: 44}}, (err, authors) => {
//     console.log("Authors with age grater than 44", authors);});



// // // Find all authors in Kuwait country


// Author.find({nationality: "Kuwait"}, (err, authors) => {
//     console.log("Kuwait Author", authors);});



// // //Find all the books that start with L or l


// Book.find({title: /^l/i}, (err, books) => {
//     console.log("Books starting with L (ignore case)", books);});



// // //Find all the books that have pages more than 250


// Book.find({pages: {$gt : 250}}, (err,books) => {
//     console.log("books with more than 250 pages", books)});



// // //Find all authors that in Kuwait or Saudi Arabia


// Author.find({$or: [{nationality: "Kuwait"}, {nationality: "Saudi Arabia"}]}, (err, authors) => {
//     console.log("Kuwaity OR Saudi", authors);});


// // //Find all authors that have 3 books or more and their age grater than 35


// Author.find({$and: [{books: {$size: 3}}, {age: {$gt: 35}}]}, (err, authors) => {
// console.log("Authors with more than 3 books and older than 35",authors);});


// // //Do not have a key of age

// Author.find({age: {$exists: false}}, (err, authors) => {
//     console.log("doesn't have a key of age",authors);});



//     // //Are not from Saudi Arabia

// Author.find({nationality: {$ne: "Saudi Arabia"}}, (err, authors) => {
//     console.log("Author is not from Saudi Arabia",authors);});



//  //Update Osama Al Muslim age to be 45//

// Author.updateOne({name: "Osama Al Muslim"}, {$set: {age: 45}}, (err, authors) => {
//     console.log("Update Osama Al Muslim age to be 45",authors);});



//     // //Remove all book that have price less than 50

// Book.deleteMany({price: {$lt: 50}}, (err, books) => {
//     console.log("Remove all book that have price less than 50",books);});


const PORT = process.env.PORT || 8080;
app.listen(PORT);