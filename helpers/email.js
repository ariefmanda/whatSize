var nodemailer = require('nodemailer');
function sendEmail(mail,url,subject, callback) {
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'whatsize8@gmail.com',
      pass: 'hacktiv8super',
    }
  });

  var mailOptions = {
    from: 'whatsize8@gmail.com',
    to: mail,
    subject: subject,
    html:
`
<html>
  <head></head>
  <body>
    <b>Hellloo whatSizeer</b><br>
    <a href='${url}'>${subject}</a>
  </body>
</html>
`
  };

  transporter.sendMail(mailOptions, function(error, info){
    callback(error, info)
  });
}
// sendEmail('arief.manda57@gmail.com','localhost:3000/user/aktiv/41c3f58f7d77ff853ac0a51cda829a07','Aktivasi Akun whatSize')
module.exports = sendEmail;
