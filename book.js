const { model, Schema } = require("mongoose");

module.exports = model("Book", new Schema({
    title: {
        type: String,
        required: [true, "Please add title for the book"]
    },
    pages: {
        type: Number,
        required: [true, "Please add pages for the book"]
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: [true, "Please add image for the book"]
    }
}))
