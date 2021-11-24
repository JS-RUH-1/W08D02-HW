const mongoose = require('mongoose')
 

const Schema= mongoose.Schema

const  bookSchema =require('./book').schema

const AuthorSchema = new Schema({

        name:{
            type:String,
            required:[true,"Author name should be provided"]
        },
        age:{
        type:Number,
        },

        nationality:{

        type:String,
        required:[true,"Author nationality should be provided"]
        },

        image:{
        type:String,
        required:[true,"Author image should be provided"]
        },
        gender:{

            type:String,
        },

          books:[bookSchema]
})

 

const Authors = mongoose.model("Author",AuthorSchema)

module.exports ={Authors}