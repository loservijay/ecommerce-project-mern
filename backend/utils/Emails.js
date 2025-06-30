const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendMail = async (receiverEmail, subject, body) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: receiverEmail,
    subject: subject,
    html: body,
  });
};

