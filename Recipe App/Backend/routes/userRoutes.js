const express = require("express")
const {signUpUser , loginUser} = require("../controllers/userController")

const router = express.Router();


// register
router.post("/register", signUpUser)

// login
router.post('/login', loginUser)

module.exports = router;