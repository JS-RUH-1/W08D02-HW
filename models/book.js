const { model, Schema } = require("mongoose");

module.exports = model("Book", new Schema({
    title: {
        type: String,
        required: [true, "Book title is required"]
    },
    pages: {
        type: Number,
        required: [true, "Book pages is required"]
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: [true, "Book image is required"]
    }
}))