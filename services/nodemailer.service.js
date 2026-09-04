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
    connectionTimeout:10000,
    greetingTimeout:10000
})

module.exports = transporter;