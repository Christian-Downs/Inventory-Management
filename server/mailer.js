const e = require('express');

function sendMail(email, subject, message) {
  var nodemailer = require('nodemailer');


    var nodemailer = require('nodemailer');


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_AUTH_USER,
            pass: process.env.MAIL_AUTH_PASSWORD
        }
    });
    console.log(transporter)
    var mailOptions = {
        from: process.env.MAIL_AUTH_USER,
        to:  email + ', ' + process.env.MAIL_AUTH_USER,
        subject: subject,
        text: message
    }
    console.log(mailOptions)

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendMail