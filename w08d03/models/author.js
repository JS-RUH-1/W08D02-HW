const mongoose = new require('mongoose'),

{Schema} = mongoose

const Author = new Schema ({
        name:{
            type:String,
            required: [true, "Author name should be provided"]
        }, 
    age: Number,

    nationality: {
        type: String,
        required: [true, "Author nationality should be provided"]
    },
    image: {
        type: String,
        required: [true, "Author image should be provided"]
    },
    gender: String,
    books: Array
})

module.exports = mongoose.model('Author',Author);