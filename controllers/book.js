const req = require("express/lib/request");

const Book = require("../models/book");

module.exports ={
//index is display all books
    index:(req,res)=>{
        Book.find({})

        .then(books=>{
            res.json(books)
        })
        .catch(error =>{
            res.json({error:error})
        })
    },

    ////////////////////////////////////////////////////////////////
    //Show book by givein id
    show:(req,res)=>{
        let _id = req.params.uid
        Book.findById(_id)
        .then(book=>{
            res.json({book})
        })
        .catch(error =>{
        res.json({error:error})
        })
    },
    /////////////
    //create new book 
    create:(req,res)=>{

        let newBook = new Book({

            title:req.body.title,
            pages:req.body.pages,
            price:req.body.price,
            image:req.body.image

                    })

           newBook.save((error)=>{
               if(error) 
            res.json({error:error})
            else
            res.json({message:"New Book inserted ."})
           })         

    },
    /////////////////////////////
    //update a book 
    update:(req,res)=>{
        let _id = req.params.uid
        let bookInfo ={
            title:req.body.title,
            pages:req.body.pages,
            price:req.body.price,
            image:req.body.image

        }
Book.findByIdAndUpdate(_id,{$set:bookInfo})
.then(user =>{
    res.json({message:"Book Information is updated"})
})
.catch(error =>{
    res.json({error:error})
})
    },
    /////////////////////

    //delete a book
    delete:(req,res)=>{
        let _id=req.params.uid
        Book.findByIdAndRemove(_id)
        .then(() =>{
            res.json({message:"Book is deleted"})
        })
        .catch(error =>{
            res.json({error:error})
        })
    }
}