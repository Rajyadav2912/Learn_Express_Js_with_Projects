const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

// post middlware
fileSchema.post("save", async function (doc) {
  try {
    console.log("Doc", doc);

    // transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // send mail options
    let info = await transporter.sendMail({
      from: `Raj Kumar`,
      to: doc.email,
      subject: "new File Upload",
      html: `<h1>Hello ${doc.name}</h1> <p>File Uploaded</p>`,
    });

    console.log(info);
  } catch (e) {
    console.log(e);
  }
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
