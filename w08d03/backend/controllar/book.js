const Book = require('../models/book')

module.exports = {


    // index function to return all books 
    index:(req,res)=>{
 //use Book model to return all books info.
         Book.find({})
         //books === response
         .then(books => {
             res.json(books)
         })
         //if have an error
         .catch(error =>{
             res.json({error: error})
         })
    }
    //---------------------

}