const express = require("express");
let router = express.Router();
const mongoose = require('mongoose')
const BookSchema = require('../bookSch')

main().catch(err => console.log(err));

//connect to db 
async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
  }

const Books = mongoose.model('Book',BookSchema);
//get
router.get("/", (req, res) => {
    Books.find({}, (err, Books) => {
        res.send(Books);
        });
});

//post
router.post("/", (req, res) => {
    console.log(req.body)
    Books.create(req.body, () => {
        res.send("saved!");
        });
});

router.put("/", (req, res) => {
    Books.findOneAndUpdate({title: req.body.title},{
    
        pages: req.body.pages,
        image:req.body.image,
        price: req.body.price,
        
    }, () => {
        res.send("updated!");
        });
});

router.delete("/", (req, res) => {
    Books.deleteOne({title:req.body.title}, ( ) => {
        res.send("deleted!");
        });
});




module.exports = router;
