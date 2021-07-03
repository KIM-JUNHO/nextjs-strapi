export default async (req, res) => {
  const nodemailer = require('nodemailer');

  var Mailgen = require('mailgen');
  // Configure mailgen by setting a theme and your product info
  var mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      // Appears in header & footer of e-mails
      name: 'Mailgen',
      link: 'https://mailgen.js/',
      // Optional product logo
      // logo: 'https://mailgen.js/img/logo.png'
    },
  });

  var email = {
    body: {
      name: 'John Appleseed',
      intro: "Welcome to Mailgen! We're very excited to have you on board.",
      action: {
        instructions: 'To get started with Mailgen, please click here:',
        button: {
          color: '#22BC66', // Optional action button color
          text: 'Confirm your account',
          link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010',
        },
      },
      outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  // Generate an HTML email with the provided contents
  var emailBody = mailGenerator.generate(email);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'jh3618.kim@gmail.com',
      pass: 'l4s83265!',
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
    html: emailBody,
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
