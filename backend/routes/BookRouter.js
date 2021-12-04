const express = require("express")
const router = express.Router()
const Book = require("../models/authorAndBookSchema ").Book;
const mongoose = require("mongoose")
router.use(express.json());


router.get("/getAll",(req,res)=>{
Book.find().then((data)=>{res.json(data)})
})

router.post("/add",(req,res)=>{
Book.insertMany([req.body]).then((data)=>{res.json(data)})
})

router.put("/", (req, res) => {
Book.findOneAndUpdate({ title: req.body.title },
{ pages: req.body.pages, price: req.body.price,image: req.body.image }, () => {
       console.log('updated')
   }); 
 
 
   res.send('updated!')
 });
 

 router.delete("/book/:id",(req,res)=>{
    Book.findByIdAndDelete({_id:req.params.id})
    .then((data)=>{res.json(data)})
     })


    



module.exports= router;