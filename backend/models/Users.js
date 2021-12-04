const mongoose = require("mongoose")
const {isEmail} =require("validator")
const bcrypt =require("bcrypt")

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "PLEASE Enter an Email"],
        unique: true,
        lowercase: true, 
        validate: [isEmail, "PLEASE Enter a valid Email"]

    },
    password:{
        type: String,
        required: [true, "PLEASE Enter an Password"],
        minlength: [6, "MINIMUM Password length is 6 characters"],

    },

})

// userSchema.post("save", function (doc,next){
//     console.log("nw user", doc) 
//      next()   

// });

userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})
userSchema.statics.login = async function(email,password){
  const user = await this.findOne({email})  
  if(user){
   const auth = await bcrypt.compare(password, user.password)
   if(auth){
     return user
   }
   throw Error('incorrect password')
  }
  throw Error ('incorrect email')
}

 
const User = mongoose.model("user" , userSchema)

module.exports = User