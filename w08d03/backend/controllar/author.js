const Author = require('../models/author')

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
    // create:(req,res){
    //     let authorNew 

    // }

}