const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "gmail",
    auth: {
      user: "placeholderccd@gmail.com",
      pass: "cardiology"
    }
  });

module.exports = transporter;