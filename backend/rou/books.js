const express = require('express');
const router = express.Router()
const Book = require('../model/book')

router.use(express.json());

router.get("/getBook" , async (req ,res)=>{
    try{
    const book = await Book.find()
    res.send(book)
    }catch{
        res.status(200).send()

    }
})

router.get("/getBook/:id" , async (req ,res)=>{
  try{
  const book = await Book.findById(req.params.id)
  res.send(book)
  }catch{
      res.status(200).send()

  }
})

//create
router.post("/newBook" , async (req , res)=>{
    const newBook = new Book(req.body.data);
    try {
        const savedBook = await newBook.save();
        const book = await Book.find()

        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Update
router.put("/:id", async (req,res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book.name === req.body.name) {
        try {
          const updatedbook = await Book.findByIdAndUpdate(req.params.id, {
              $set: req.body,
            },
            { new: true }
          );
        
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your books!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
})

//delete
router.delete("/deleteBook/:id", async (req,res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book.username === req.body.username) {
        try {
          await book.delete();
          res.status(200).json("Book has been deleted...");
          
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your books !");
      }
    } catch (err) {
      res.status(500).json(err);
    }
})











module.exports = router;