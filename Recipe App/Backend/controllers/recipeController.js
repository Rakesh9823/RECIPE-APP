const mongoose = require("mongoose")
const Recipe = require("../models/recipeSchema")

const createRecipe = async (req , res) =>{
   try{
    let newRecipe = req.body
    const recipe = await Recipe.create(newRecipe)
    res.status(200).json({
        status:"Successfully added new Recipe",
        recipe
    })
   }catch(e){
    res.status(400).json({
        status:"Failed",
        message:e.message
    })
   }
    
}

const getRecipe = async (req , res) =>{
    try{
        let result = await Recipe.find();
        res.status(200).json({
            status:"Success",
            result
        })
    }catch(e){
        res.status(400).json({
            status:"Failed",
            message:e.message
        })
    }
}

module.exports ={ createRecipe , getRecipe}
