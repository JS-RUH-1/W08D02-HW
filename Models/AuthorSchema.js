const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = require('./BookSchema').schema
const Author = new Schema ({
    name :{
        type :String,
        required:[true , "can't be blank"]
    },
    age :Number ,
    nationality :{
        type : String,
        required:[true , "can't be blank"]
    },
    image:{
        type:String,
        required:[true , "can't be blank"]
    },
    gender :String,
    books:[bookSchema]
})
module.exports= mongoose.model('Author',Author)