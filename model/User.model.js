const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{type: String, required:true, minLength:4, maxLength:10},
    lastName:{type: String, required:true, minLength:4, maxLength:10},
    emailAddress:{type: String, required:true, unique:true},
    password:{type: String, required:true},
    role:{type:String, required:true},
    agreed:{type:Boolean, required:true}
})

const userModel = mongoose.model('user',userSchema );
module.exports = userModel;