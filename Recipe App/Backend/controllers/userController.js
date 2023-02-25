const {User} = require("../models/userSchema")

const { Result } = require("express-validator");
const { body, validationResult } = require('express-validator')

const jwt = require('jsonwebtoken');
const secret = "RECIPEKEY";

const signUpUser = (
    body('email').isEmail(),
    body('password').isLength({ min: 6, max: 16 }), async (req, res) => {

        const data = req.body;
        try {
            const existingUser = await User.findOne({email:data.email});
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const user = await User.create(req.body);
            console.log(user);
            res.status(201).json({
                status: "User registered sucessfully",
                user
            })
            console.log(req.body);
        }
        catch (e) {
            res.status(500).json({
                status: "Failed",
                message: e.message
            })
        }
    });

const loginUser = async (req, res) => {

        const data = req.body;
        try {
            const existingUser = await User.findOne({ $and: [{ email: data.value },{ password: data.password }] });
    
            if (!existingUser) {
                return res.status(400).json({
                    status: 'Failed',
                    message: 'Invalid details'
                });
            }
    
            if (existingUser) {
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: existingUser._id,
                }, secret);
                console.log(data);
                console.log(token);
                return res.status(200).json({
                    status: "Success",
                    message: "Login Sucessful",
                    token,
                    existingUser
                })
            } else {
                return res.status(400).json({
                    status: "Failed"
                })
            }
    
        }
        catch (e) {
            res.status(500).json({
                status: "Failed",
                message: e.message
            })
        }
    }

    module.exports = {signUpUser , loginUser}