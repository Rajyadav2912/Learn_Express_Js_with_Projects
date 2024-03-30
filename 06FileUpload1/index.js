// app create
const express = require("express");
const app = express();

// // import .env from folder .env for urls
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware for parse json responses
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

// import database and establish connection
const DB = require("./Config/database");
DB.connect();

// import Cloudinary from 'cloudinary file and establish connection
const cloudinary = require("./Config/cloudinary");
cloudinary.cloudinaryConnect();

// import routes from Routes folder
const Upload = require("./Routes/fileUpload");
app.use("/api/v1/upload", Upload);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// default routes for activate server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
