const mongoose = require('mongoose'),
{Schema} = mongoose 


const PostSchema = new Schema({


title:{
    type:String,
    trim:true,
    required: true
},
text:{
    type:String,
    trim:true,
    required: true
},
// refrence for user
userId:{
    type: Schema.Types.ObjectId,ref:"User"
}


})

module.exports = mongoose.model("Post",PostSchema) 