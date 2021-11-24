const Author = require('../models/author')
const Book = require('../models/book')


module.exports = {

     // index function  to return all authors
    index:(req,res)=>{

  //use Author model to return all authors info.
        Author.find({})
          //authors === response
        .then(authors => {
        res.json(authors)
        })
          //if have an error
        .catch(error =>{
        res.json({error: error})
        })
    },
     //-----------------------
    show:(req,res)=>{
      let authorId = req.params.authid
      Author.findById(authorId)
      .then(author =>{
        res.json({author})
      })
      .catch(error =>{
        res.json({error: error})
        })
    },
     //---------------------
    update:(req,res)=>{
      let authorId = req.params.authid

      let authorInfo = {
        name:req.body.name,
        age:req.body.age,
        nationality:req.body.nationality,
        image:req.body.image,
        gender:req.body.gender
      }
       Author.findByIdAndUpdate(authorId,{$set:authorInfo})
       .then(() => {
        res.json({message: "Author information has been updated"})
       })
       .catch(error =>{
        res.json({error: error})
        })
    },
     //------------
    delete: (req,res)=>{
      let authorId = req.params.authid
      Author.findByIdAndRemove(authorId)
      .then(()=>{
        res.json({message:"Author is deleted"})
      })
      .catch(error =>{
        res.json({error: error})
        })
    },

  create:(req,res)=> {
    let newAuthor = new Author({
      name:req.body.name,
      age:req.body.age,
      nationality:req.body.nationality,
      image:req.body.image,
      gender:req.body.gender,
      books:[Book.schema]
    })
    newAuthor.save((error)=>{
      if(error)
      res.json({error:error}) 
      else
      res.json({message:"Author inserted"})
    })
   


   }

}