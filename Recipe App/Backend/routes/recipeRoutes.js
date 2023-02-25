const express=require('express');
const {createRecipe , getRecipe} = require("../controllers/recipeController")
const router=express.Router();


router.post("/create" , createRecipe)
router.get("/recipes" , getRecipe)

module.exports = router