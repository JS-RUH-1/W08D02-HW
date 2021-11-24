const mongoose = require('mongoose'),
{Schema} = mongoose

const AuthorSchema = new Schema({

        name:{
            type:String,
            required:"Author name should be provided"
        },
        age:{
        type:Number,
        },

        nationality:{

        type:String,
        required:"Author nationality should be provided"
        },

        image:{
        type:String,
        required:"Author image should be provided"
        },
        gender:{

            type:String,
        },

// book:{

// }
})

module.exports =mongoose.model("Author",AuthorSchema)