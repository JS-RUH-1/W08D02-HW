const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema ({
    title:{type:String,required :[true , "can't be blank"]},
    pages:{type:Number,required:[true, "can't be blank"]},
    price:{type:Number,default:0},
    image:{type:String,required:[true,"can't be blank"]}
})

const Book = mongoose.model('book' ,BookSchema)
module.exports=Book