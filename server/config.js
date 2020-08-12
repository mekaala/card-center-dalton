const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.pass
    }
  });

module.exports = transporter;