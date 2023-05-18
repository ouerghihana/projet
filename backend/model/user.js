const mongoose = require('mongoose')


const UserSchema= new mongoose.Schema({
    UserName:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    role:{
        type:String,
        default:"user",
    }
    
   
    
})

module.exports = mongoose.model('UserSchema',UserSchema);