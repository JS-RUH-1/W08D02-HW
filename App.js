let express =require('express')

//connection with mongoose.
const mongoose = require('mongoose');

const Books = require('./models/book')
const Authors=require('./models/author').Authors

const Aseed=require('./author_seed')
const Bseed = require("./book_seed")

////////////////////////////////////////////////////////////////////////

app = express()

const router = require("./routes/index")

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost:27017/blogs",{ 

useNewUrlParser:true

}) 

///////////
const connection = mongoose.connection
connection.once('open', () => console.log('Connected to DB'),
  connection.on('disconnected', () => console.log('mongo disconnected')),
  connection.on('error', err => { console.log('connection error', err) }))



/////////////////////////////////////
  Books.insertMany(Bseed, (err, books) => {
    if (err) { console.log(err) }
    console.log("added provided books data", books)
    mongoose.connection.close();
  });


//////////////////



Authors.insertMany(Aseed, (err, auther) => {
    if (err) { console.log(err) }
    console.log("added auther", auther)
    mongoose.connection.close();
  })

///////////////

// add new two authors

Authors.insertMany([
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

////////////////////////

// display all male authors 

Authors.find({gender:"male"},(error,books)=>{

    if(error){console.log(error)}
    console.log("added provided books data",books)
    mongoose.connection.close();
})


/////////////////////
///all authors > 44

Authors.find({ age: { $gt: 44 } }, (err, books) => {
    if (err) { console.log(err) }
    console.log("all authors that age grater than 44", books)
    mongoose.connection.close();
  })

////////////////////////////////////////////////////////////////


///all authors from Kuwait

Authors.find({ nationality: "Kuwait" }, (err, books) => {
    if (err) { console.log(err) }
    console.log("all authors in Kuwait country", books)
    mongoose.connection.close();
  })

/////////////////////


//all book tHAT start with L or l

Books.find({ title: { $regex: /^l/, $options: 'i' } }, (err, books) => {
    if (err) { console.log(err) }
    console.log("all the books that start with L or l", books)
    mongoose.connection.close();
  })
  ///////////////////

// book with pages more than 250

Books.find({ pages: { $gt: 250 } }, (err, books) => {
    if (err) { console.log(err) }
    console.log("all the books that have pages more than 250", books)
    mongoose.connection.close();
  })

////////////////////////////////
//authors in KSA and Kuwait

Authors.find({ $or: [{ nationality: "Kuwait" }, { nationality: "Saudi Arabia" }] }, (err, books) => {
    if (err) { console.log(err) }
    console.log("all the books that have pages more than 250", books)
    mongoose.connection.close();
  })
///////////////////

//all authors have 4 book or more and age is 35

Authors.find({ $and: [{ books: { $size: 3 } }, { age: { $gt: 35 } }] }, (err, books) => {
    if (err) { console.log(err) }
    console.log(" all authors that have 3 books or more and their age grater than 35", books)
    mongoose.connection.close();
  })
////////////////////////


//author key of age 

Authors.find({ age: { $exists: false } }, (err, books) => {
    if (err) { console.log(err) }
    console.log("Author do not have a key of age", books)
    mongoose.connection.close();
  })
///////////////////////

//author not from KSA

Authors.find({ nationality: { $ne: "Saudi Arabia" } }, (err, books) => {
    if (err) { console.log(err) }
    console.log("Author are not from Saudi Arabia", books)
    mongoose.connection.close();
  })
////////////////////////////////////

//update osama Al Muslim age==>45


Authors.updateOne({ name: "Osama Al Muslim" }, { $set: { age: 45 } }, (err, books) => {
    if (err) { console.log(err) }
    console.log("Update Osama Al Muslim age to be 45", books)
    mongoose.connection.close();
  })

/////////////////////////////
// remove all books

Books.deleteMany({ price: { $lt: 50 } }, (err, books) => {
    if (err) { console.log(err) }
    console.log("Remove all book that have price less than 50", books)
    mongoose.connection.close();
  })

////////////////////////////////////////////////////////////////


app.use(express.json())

app.use('/',router)



////////////////////////////////////////////////////////////////////////////////////////////////

 



////////////////////////////////////////////////////////////////




 

app.listen(3003,()=>{
    console.log("express has started !")
})
