const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    // host: "smtp.mailtrap.io",
    // port: 2525,
    // auth: {
    //   user: "7f8421d0e0630c",
    //   pass: "f33e3210fced14"
    // }
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.email,
      pass: process.env.pass,
    }
  });

module.exports = transporter;