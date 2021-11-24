const mongoose = require("mongoose")
const Book = require("./book")

    const autherSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Author name should be provided"]
        },
        age: {
            type: Number
        },
        nationality: {
            type: String,
            required: [true, "Author nationality should be provided"]
        },
        image: {
            type: String,
            required: [true, "Author image should be provided"]
        },
        gender: String,
        books: [Book.schema]
    })
    
    
    
    module.exports = mongoose.model("Auther", autherSchema)
    
    

