const express= require('express')
const router = express.Router()
// const authorSeed = require("../author_seed")
const Author = require('../model/Author')
router.use(express.json());

//get 
router.get('/getauthor' , async (req , res )=>{
    try{
        const author = await Author.find()
        res.send(author)

    }catch{
        res.status(500).send()

    }
})

router.get('/getauthor/:id' , async (req , res )=>{
    try{
        const author = await Author.findById(req.params.id)
        res.send(author)

    }catch{
        res.status(500).send()

    }
})


router.post ('/createBook/:id', async (request,response) => {
    const author= await Author.findById(request.params.id)
      const createBook = new Book ({
          title: request.body.data.title,
          pages: request.body.data.pages,
          price: request.body.data.price,
          image: request.body.data.image,
      })
      console.log(createBook);
      author.books.push(createBook)
      try {
          await author.save()
          response.status(201)
          // const authors = await Author.find()
          response.send(author)
      }
      catch(e) {
          console.error(e)
      }
      console.log("Add");
  })

  //delete book
  router.delete ('/deleteBook/:idAuth/:idBook', async (request,response) => {
    const bookId = request.params.idBook;
     try {
       const author= await Author.findById(request.params.idAuth)
        if (!author){
           return response.status(404),send()
        }
        await author.books.pull({_id: bookId})
        await author.save()
        response.status(201).send(author)
     }
     catch(e) {
         response.status(500).send();
         console.error(e)
     }
 })
//create 
router.post("/new", async (req, res) => {
    const newAuthor = new Author(req.body);
    try {
        const savedPost = await newAuthor.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
})



//Update
router.put('/updateAuther/:id', async (request,response)=> {
    const allowedUpdates = ['name', 'age', 'nationality', 'image', 'gender', 'books'];
    const updates = Object.keys(request.body)
    const isValidOperation  = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation) {
        return response.status(400).send({erro: 'Invalid updates'});
    }
    try {
        const author = await Author.findOne({_id: request.params.id});
        if(!author) {return response.status(404).send(404).send()}
        updates.forEach((update)=> {
            author[update] = request.body[update]
        })
        await author.save()
        response.status(200).send(author)
    } catch(e){
        response.status(400).send(e)
        console.error(e)
    }
 })


 //delete
 router.delete("/deleteAuthor/:id", async (req,res) => {
    const id=req.params.id
        Author.findByIdAndDelete(id)
            .then((data)=>{
                Author.find().then(data=>res.json(data))
                })
            

    // try{
    //     await Author.findByIdAndDelete({_id:req.params.id})
        
    //     const author = await Author.find()
    //     res.status(200).send(author)
    // }catch{
    //     res.status(500).send();
    // }
    
})

router.get("/Author/:id" ,async (req,res)=>{
    const _id = req.params.id
    try{
        const idA = await Author.findOne({_id});
        res.send(idA)

    }catch{
        res.status(200).send

    }

})



















module.exports = router;
