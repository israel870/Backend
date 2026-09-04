const studentModel = require('../model/User.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const userModel = require('../model/User.model');
const { transporter } = require('../services/nodemailer.service');


const postUser = async (req, res)=>{
    try {
        console.log(req.body);

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword

        const verCode = Math.floor(Math.random()*1000000).toString().padStart(6,'0');
        const newUser = new userModel(req.body)
        const info = await transporter.sendMail({
            from:`${process.env.SMTP_USER}`,
            to:`${req.body.emailAddress}`,
            subject:"Welcome to Stayside",
            html:`<div><b>Hello</b> ${req.body.firstName} </div>
            <h3>Your 6 digit code is </h3> ${verCode}
            `  
        })  

        const savedUser = await newUser.save()
       

    

        res.status(200).json({"message":"sucess", savedUser})
    } catch (error) {
        console.log(error);
        res.status(400).json({"message":"Bad request", error})
        
    }
}

module.exports = {postUser}