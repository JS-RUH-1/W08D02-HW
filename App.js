let express =require('express')
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

app.listen(3002,()=>{
    console.log("express has started !")
})
