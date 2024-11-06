import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "*********@gmail.com",
    pass: "*************",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

var mailOptions = {
  from: "*********@gmail.com",
  to: "@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  console.log("email sending...");

  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
