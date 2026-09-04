const nodemailer = require('nodemailer');
require('dotenv').config;

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    connectionTimeout:100000,
    greetingTimeout:100000,
    family:4
})

module.exports = transporter;