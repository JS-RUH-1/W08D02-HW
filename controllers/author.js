const req = require("express/lib/request");
const Author = require("../models/author");

module.exports={

    //method index is bring all data 
    index:(req,res)=>{
        Author.find({})

        .then(authors=>{
            res.json(authors)
        })
        .catch(error =>{
            res.json({error:error})
        })
    },
    ////////////////////////////////////////////////////////////////
create:(req,res)=>{
    let newAuthor = new Author({

              name:req.body.name,
               age:req.body.age,
        nationality:req.body.nationality,
              image:req.body.image,
             gender:req.body.gender,
             

    })
newAuthor.save((error)=>{
    if(error) 
    res.json({error:error})
    else
    res.json({message:"New Author inserted ."})
})
},
////////////////////////////////////////////////////////////////
//Show book by givin id 
show:(req,res)=>{
    let _id=req.params.uid

    Author.findById(_id)
    .then(author=>{
        res.json({author})
    })
    .catch(error =>{
    res.json({error:error})
    })
},
//////////////////////////
update:(req,res)=>{
    let _id = req.params.uid
    let authorInfo ={
        name:req.body.name,
         age:req.body.age,
 nationality:req.body.nationality,
       image:req.body.image,
      gender:req.body.gender

    }
    Author.findByIdAndUpdate(_id,{$set:authorInfo})
    .then(user =>{
    res.json({message:"Author Information is updated"})
    })
    .catch(error =>{
    res.json({error:error})
    })
    },
////////////////////////////////////////////////////////////////
 //delete a book
 delete:(req,res)=>{
    let _id=req.params.uid
    Author.findByIdAndRemove(_id)
    .then(() =>{
        res.json({message:"Author is deleted"})
    })
    .catch(error =>{
        res.json({error:error})
    })
}

}