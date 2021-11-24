const mongoose = require('mongoose'),
{Schema} = mongoose


const BookSchema = new Schema({

title:{
    type: String,
    required:"Book title should be provided"   
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

module.exports =mongoose.model("Book",BookSchema)