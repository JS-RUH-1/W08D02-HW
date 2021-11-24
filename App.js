let express =require('express')

//connection with mongoose.
let mongoose = require('mongoose'),

app = express()

const router = require("./routes/index")


mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost:27017/blogs",{ 

useNewUrlParser:true

}) 

app.use(express.json())

app.use('/',router)




// app.get('/',(req,res)=>{
//     res.json({message: "Hello world"})
// })

app.listen(3003,()=>{
    console.log("express has started !")
})
