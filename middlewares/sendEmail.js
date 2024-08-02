import nodemailer from "nodemailer";

export const sendMail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    service: "gmail",
    auth: {
      user: "fisakhan0347@gmail.com",
      pass: "mnqi jalg hxqf wkix",
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
  });
  const mailData = {
    from: "fisakhan0347@gmail.com",
    to: to,
    subject: subject,
    text: text,
    html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
  };
  console.log(mailData);
  return await transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    status(200).send({ message: "Mail send", message_id: info.messageId });
  });
};
