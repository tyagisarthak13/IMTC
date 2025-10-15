import nodemailer from "nodemailer";

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"IMTC Payments" <${process.env.EMAIL_USER}`,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email send successfully to:", to);
  } catch (error) {
    console.error("Error sending email", error);
  }
};

export default sendEmail;
