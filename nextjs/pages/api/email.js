export default async (req, res) => {
  const nodemailer = require('nodemailer');
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'jh3618.kim@gmail.com',
      pass: 'l4s83265!',
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: req.body.email, // list of receivers
    subject: `Message From ${req.body.name}`, // Subject line
    text: req.body.message + ' | Sent from: ' + req.body.email, // plain text body
    html: `<b>${req.body.message}</div><p>Sent from:${req.body.email}</b>`, // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.status(200).json({
    status: 'Success',
    code: 200,
    message: 'Sent Auth Email',
  });
};
