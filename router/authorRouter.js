
const express = require("express");
let router = express.Router();
const mongoose = require('mongoose')
const Author1 = require('../aoutherSch')
const BookSchema = require('../bookSch')
const jwt = require('jsonwebtoken')
// const Author1 = require('../aoutherSch').Author
// const Book = require('../aoutherSch').Book
router.use(express.json())


// main().catch(err => console.log(err));

//connect to db 
// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/test');
//   }

const Book = mongoose.model('Book',BookSchema);

//handle errors
const handleError = (err)=>{
    
    console.log(err.message, err.code);
  let error = { email: '', password: '' };

  //incorrect email
  if (err.message === 'incorrect email') {
    error.email = 'that email is not registered';
  }

    //incorrect password
    if (err.message === 'incorrect password') {
        error.password = 'that password is not correct';
      }

  // duplicate email error
  if (err.code === 11000) {
    error.email = 'that email is already registered';
    return error;
  }

    //validate errors
    if(err.message.includes("Author validation failed")){
       Object.values(err.errors).forEach(({properties})=> {
        error[properties.path] = properties.message;
       })
    }
    return error;
}
const maxAge = 3 * 24 * 60 * 60;
const createToken =(id)=>{
    return jwt.sign({id}, 'masha aldossari secret',{
        expiresIn:maxAge
    });
}

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



//post for signup
router.post("/signup",async (req, res) => {
    const {name,age,nationality,image,gender,email, password} = req.body;
    try{
      
      const authorUser= await Author1.create({name,age,nationality,image,gender,email, password})
      const token =createToken(authorUser._id)
      res.cookie('jwt',token,{httpOnly:true , maxAge: maxAge * 1000})
      res.status(201).json({authorUser : authorUser,token:token})
    }
    catch(err){
      const error = handleError(err)

        res.status(400).json(error)
    }
    //console.log(email, password)
    //res.send('new signup');
});

//post for login
router.post("/login", async(req, res) => {
  const {email, password} = req.body;
  try{

    const authorUser= await Author1.login(email, password)
    const token =createToken(authorUser._id)
    res.cookie('jwt',token,{httpOnly:true , maxAge: maxAge * 1000})
    res.status(200).json({authorUser : authorUser,token:token})
  }
  catch(err){
      const errors = handleError(err);
    res.status(400).json({errors})
  }
});

//logout

router.get("/logout", (req, res) => {
   
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
});



//post

router.post("/", async (req, res) => {
    const author= new Author1({
        name:req.body.name,
        age:req.body.age,
        nationality: req.body.nationality,
        image:req.body.authorImage,
        gender:req.body.gender
    })

try{
    await author.save()
    const authors=await Author1.find()
    res.status(201).send(authors)
}
catch(e){
    console.error(e)
}
console.log("added")
       
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
