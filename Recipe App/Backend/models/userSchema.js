const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const userSchema =  new mongoose.Schema({
    email:{type:String , required:true , unique: true},
    password:{type:Number , required:true},
    repeatPassword:{type:Number , required:true}
},)

module.exports = {User : mongoose.model("UserDetails" , userSchema)}