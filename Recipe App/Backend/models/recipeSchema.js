const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    title:{type:String , required:true},
    author:{type:String , required:true},
    image:{type:String},
    ingrdients:[],
    directions:{type:String , required:true}
})

module.exports = mongoose.model("Recipe" , recipeSchema)