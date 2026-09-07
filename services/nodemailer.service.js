const nodemailer = require('nodemailer');
require('dotenv').config;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        type:'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN
    }
})

module.exports = transporter;