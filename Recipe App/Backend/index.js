const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const recipeRoutes = require("./routes/recipeRoutes")
const userRoutes = require("./routes/userRoutes")
const app=express();
app.use(express.json());
app.use(cors());


app.use("/recipe" , recipeRoutes)
app.use("/user" , userRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/test' , {useNewUrlParser:true, useUnifiedTopology:true})
  .then(() => console.log('Connected!'));

  app.listen(8000, ()=> {
    console.log("Server up at Port 8000")
});