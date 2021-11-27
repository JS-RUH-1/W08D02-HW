
const express = require("express");
let router = express.Router();
const mongoose = require('mongoose')
const authoeSchema = require('../aoutherSch')
const BookSchema = require('../bookSch')

main().catch(err => console.log(err));

//connect to db 
async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
  }

const Author1 = mongoose.model('Author',authoeSchema);
const Book = mongoose.model('Book',BookSchema);

//get
router.get("/", (req, res) => {
   
     Author1.find({}, (err, authors) => {
       res.send(authors);
        });
});
//endpoint
router.get("/:id", (req, res) => {
    console.log(req.params.id);
     Author1.find({_id: req.params.id},(err, authors)=>{
        res.send(authors)
     }) 

  });
//post

router.post("/", (req, res) => {

    Author1.create(req.body, (err, data) => {
        console.log(req.body)
   
        res.send("seved!");
        });
        // Author1.find({}, (err, authors) => {
        //     res.send(authors);
        //     });
       
});


router.post("/book/:id", async (req, res) => {
    const _id = req.params.id
    const author =  await Author1.findById({_id})
    console.log(author)
   
    const newBook = new Book({
            title: req.body.title,
            pages: req.body.pages,
            price: req.body.price,
            image: req.body.image
        })

       author.books.push(newBook)
 
      await author.save()
       res.send(author)
});

router.put("/", (req, res) => {
    
    Author1.findOneAndUpdate({_id: req.body.id},{
        name:req.body.name,
        age: req.body.age,
        image:req.body.image,
        nationality: req.body.nationality,
        gender:req.body.gender,
        books: req.body.books
        
    }, () => {
        Author1.find({}, (err, authors) => {
            res.send(authors);
            });
        });
});

router.delete("/:id", (req, res) => {
    Author1.deleteOne({_id:req.params.id}, ( ) => {
        Author1.find({}, (err, authors) => {
            res.send(authors);
            });

        });
});




module.exports = router;
