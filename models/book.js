const mongoose = require('mongoose')

 const Schema= mongoose.Schema


const BookSchema = new Schema({

title:{
    type: String,
    required:[true,"Book title should be provided" ]  
},
pages:{
    type:Number,
    required:"Book pages should be provided"
},
price:{
type:Number,
default:0
},
image:{
    type:String,
    required:"Book image should be provided"
}

})

 
const Books =mongoose.model("Book",BookSchema)

module.exports = Books