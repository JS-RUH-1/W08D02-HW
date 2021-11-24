const mongoose = require ('mongoose')
const Book = require('./Models/BookSchema')
const Author = require('./Models/AuthorSchema')
const AuthorSeed = require('./author_seed')
const BookSeed = require('./book_seed')

const uri = 'mongodb+srv://Mushira:Ms0503391650@cluster0.nujs7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {
useNewUrlParser: true, useUnifiedTopology: true
});
const connection = mongoose.connection
connection.once('open', () => console.log('Connected to DB'),
connection.on('disconnected', () => console.log('mongo disconnected')),
connection.on('error', err => {console.log('connection error', err)}))

// Book.insertMany(BookSeed, (err, books) => {
//     if (err){ console.log(err)}
//       console.log("added provided books data", books)
//       mongoose.connection.close();
//     });

    // Author.insertMany(AuthorSeed, (err, authors) => {
    //     if (err){ console.log(err)}
    //       console.log("added provided books data", authors)
    //       mongoose.connection.close();
    //     });
// _______________________________________________insert 2 new
// Book.insertMany([
//     {"title":"Crossing Thoughts",
// "pages":220 ,
// "price":64 ,
//  "image":"https://images-na.ssl-images-amazon.com/images/I/41AHNSGy0bL._SX331_BO1,204,203,200_.jpg"},
//  {
//         "title":"Sea of Strangers",
//         "pages":224 ,
//         "price":74 ,
//          "image":"https://images-na.ssl-images-amazon.com/images/I/41fzgBfnZ9L._SX311_BO1,204,203,200_.jpg"}
//         ], (err, books) => {
//     if (err){ console.log(err)}
//       console.log("added provided books data", books)
//       mongoose.connection.close();
//     });

        // Author.insertMany([
        //     {
        //     "name":"Sultan Ayaz",
        //     "age":30,
        //     "nationality":"Saudi Arabia",
        //     "image":"https://vid.alarabiya.net/images/2020/10/08/f68eb20c-106c-4e12-9ee0-61d9920a6a20/f68eb20c-106c-4e12-9ee0-61d9920a6a20.jpg",
        //     "gender": "male",
        //     "books":[]
        //     },
        //     {
        //          "name":"Lang Leav",
        //         "age":32,
        //         "nationality":"Auckland, New Zealand",
        //         "image":"https://images.gr-assets.com/authors/1386062549p5/7012565.jpg",
        //          "gender": "female",
        //          "books":[]

        // }], (err, authors) => {
        // if (err){ console.log(err)}
        //   console.log("added provided books data", authors)
        //   mongoose.connection.close();
        // });
// ____________________________________________________________Find
// _______________________i_____________________
// Author.find({}, (err, authors) => {
//     console.log(authors);
//     mongoose.connection.close();
//     }); 
// _______________________ii_____________________
// Author.find({age:{$gt:44}}, (err, authors) => {
//         console.log(authors);
//         mongoose.connection.close();
//         }); 
// _______________________iii_____________________
// Author.find({nationality:"Kuwait"}, (err, authors) => {
//             console.log(authors);
//             mongoose.connection.close();
//             })
// __________________________iv________________________
// Book.find({title:/^l/i}, (err, authors) => {
//                 console.log(authors);
//                 mongoose.connection.close();
//                 })
// __________________________v________________________
// Book.find({pages:{$gt:250}}, (err, authors) => {
//     console.log(authors);
//     mongoose.connection.close();
//     })
 //  __________________________Select with OR________________________
    // Author.find({$or :[{nationality:"Kuwait"},{nationality:"Saudi Arabia"}]}, (err, authors) => {
    //     console.log(authors);
    //     mongoose.connection.close();
    //     })
    // __________________________Select with AND_______________________
        // Author.find({$and:[{books:{$size:3}},{age:{$gt:35}}]}, (err, authors) => {
        //     console.log(authors);
        //     mongoose.connection.close();
        //     })
// ______________________________Select by exists _______________________________
    // Author.find({age:{$exists:false}}, (err, authors) => {
    //      console.log(authors);
    //     mongoose.connection.close();
    //      })
// _________________________Negative Selection____________________________________
// Author.find({nationality:{$ne:"Saudi Arabia"}}, (err, authors) => {
//          console.log(authors);
//         mongoose.connection.close();
//          })
// ______________________________Update___________________________________________
// Author.updateOne({name:"Osama Al Muslim"},{$set:{age:45}},
// (err, authors) => {
//     console.log(authors);
//    mongoose.connection.close();
//     })
// _____________________________Remove__________________________________
Book.deleteMany({price:{$lt:50}},(err, authors) => {
    console.log(authors);
   mongoose.connection.close();})