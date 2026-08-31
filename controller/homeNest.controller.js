const studentModel = require('../model/User.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const userModel = require('../model/User.model');

const postUser = async (req, res)=>{
    try {
        console.log(req.body);

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword

        const newUser = new userModel(req.body)
        const savedUser = await newUser.save()
        

        res.status(200).json({"message":"sucess", savedUser})
    } catch (error) {
        console.log(error);
        res.status(400).json("Bad request", error)
        
    }
}

module.exports = {postUser}