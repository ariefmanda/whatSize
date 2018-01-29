var nodemailer = require('nodemailer');
function sendEmail(mail,url,subject) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'whatsize8@gmail.com',
      pass: 'hacktiv8super'
    }
  });

  var mailOptions = {
    from: 'whatsize8@gmail.com',
    to: mail,
    subject: subject,
    text: url
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendEmail;
