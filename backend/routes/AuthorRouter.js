const express = require("express")
const router = express.Router()
const Author = require("../models/authorAndBookSchema ").Author;
const mongoose = require("mongoose")
router.use(express.json());


router.get("/getAll",(req,res)=>{
    Author.find().then((data)=>{res.json(data)})
})

router.get("/getAuthor/:id",async (req,res)=>{
    try {
        const author = await  Author.findById(req.params.id )
        res.send(author);
    } catch (e) {
        res.status(500).send()
        console.error(e)
    }
})

router.post("/add", async(req,res)=>{
const author = new Author ({
name:req.body.name,
age:req.body.age ,
nationality:req.body.nationality, 
image:req.body.image,
gender:req.body.gender
})
try {await author.save()
res.status(201)
Author.find().then((data)=>{res.json(data)})
}
catch(e){
    console.error(e)
}
console.log("ADDED")

})

router.put("/update/:id", (req, res) => {
Author.findOneAndUpdate({ title: req.body.title },
{ pages: req.body.pages, price: req.body.price,image: req.body.image }, () => {
       console.log('updated')
   }); 
 
 
   res.send('updated')
 });
 

router.delete("/Author/:id",(req,res)=>{
Author.findByIdAndDelete(req.params.id)
    .then((data)=>{
        Author.find().then(data=>res.json(data))
        })
     })



    



module.exports= router;




