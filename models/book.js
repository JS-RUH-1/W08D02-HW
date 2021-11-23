const { model, Schema } = require("mongoose");

module.exports = model("Book", new Schema({
    title: {
        type: String,
        required: [true, "Book title should be provided"]
    },
    pages: {
        type: Number,
        required: [true, "Book pages should be provided"]
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: [true, "Book image should be provided"]
    }
}))