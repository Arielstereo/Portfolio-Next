import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "arielfabmartinez@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>`,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}
