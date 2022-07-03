const nodemailer = require('nodemailer');
require('dotenv').config();

const serverSupportMail = 'alisher.ibraev.2000@gmail.com'
const serverSupportPassword = process.env.EMAIL_PASSWORD

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: serverSupportMail,
        pass: serverSupportPassword
    }
});

function sendOptMail(email, otpCode) {
    var mailOptions = {
        from: 'alisher.ibraev.2000@gmail.com',
        to: email,
        subject: 'eshop password assistance',
        text: 'K ověření použijte následující přístupový kód: \n' + otpCode +
            '\nTento přístupový kód s nikým nesdílejte.\n Zabezpečení vašeho účtu velmi vážně.'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


module.exports.sendOptMail = sendOptMail;
module.exports.getRandomInt = getRandomInt;