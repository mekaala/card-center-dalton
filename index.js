const path = require('path');
const express = require('express');
const app = express();
const transporter = require('./config');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build`)
})

app.post(`/send`, (req, res) => {
    try {
      const mailOptions = {
        from: req.body.email,
        cc: process.env.forward,
        to: process.env.email,
        subject: `Appointment Request from ${ req.body.lastName }, ${ req.body.firstName } ${ req.body.middleInitial }. - ${ req.body.patient } `,
        text: `${ req.body.firstName } ${ req.body.middleInitial }. ${ req.body.lastName } has requested an appointment as a ${ req.body.patient } via the Cardiology Center of Dalton website. Patient is ${ req.body.gender }, was born on ${ req.body.birthdate }, and requested an appointment for the following reasons: ${ req.body.description }.
        \nPatient can be reached through phone number ${ req.body.phoneNumber } and email address ${ req.body.email }.
        \nInformation provided by patient:\n\nName: ${req.body.lastName }, ${ req.body.firstName } ${ req.body.middleInitial }.\nGender: ${ req.body.gender }\nEmail: ${ req.body.email }\nPhone Number: ${ req.body.phoneNumber }\nDate of Birth: ${ req.body.birthdate }\nIs patient new or returning: ${ req.body.patient }\nReasons for Requesting Visit: ${ req.body.description }.`
      };
  
      transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
          res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later.'
          });
        } else {
          res.send({
            success: true,
            message: 'Thanks for contacting us. We will get back to you within two business days!'
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later'
      });
    }
    transporter.sendMail({
      from: "<your email address>",
      to: req.body.email,
    	subject: `Appointment Request at Cardiology Center of Dalton - ${ req.body.lastName }, ${ req.body.firstName }  ${ req.body.middleInitial }.`,
        text: `Dear ${ req.body.firstName } ${ req.body.middleInitial }. ${ req.body.lastName },
        \nThank you for requesting an appointment at the Cardiology Center of Dalton. This is your confirmation email to inform you that your request has been received. Our office will contact you within two business days.
        \nThank you,\nCardiology Center of Dalton
        \n1411 Chattanooga Avenue\nDalton, Georgia 30720\n706-272-0272
        \nBelow is the information provided.\n\nName: ${ req.body.lastName }, ${ req.body.firstName }  ${ req.body.middleInitial }.\nGender: ${ req.body.gender }\nEmail: ${ req.body.email }\nPhone Number: ${ req.body.phoneNumber }\nDate of Birth: ${ req.body.birthdate }\nPatient Type: ${ req.body.patient }\nMessage: ${ req.body.description }.`
  }, function(error, info){
    	if(error) {
      	console.log(error);
    	} else{
      	console.log('Message sent: ' + info.response);
    	}
});
  });

  app.set( 'port', ( process.env.PORT || 3001 ));

  // Start node server
  app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
    });