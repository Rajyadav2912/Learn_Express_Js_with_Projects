// Server instantiate
const express = require("express");
const app = express();

// load config from env PORT & Database
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware to parse json requests body
app.use(express.json());

const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
// Connect to The Database
const DB = require("./Config/database");
DB.connect();

// import Cloudinary from 'cloudinary file and establish connection
const cloudinary = require("./Config/cloudinary");
cloudinary.cloudinaryConnect();

// import routes from Route folder
const ProductRoute = require("./Routes/ProductRoute");

// mount the api routes
app.use("/api/v1", ProductRoute);

// defualt the routes
app.get("/", (req, res) => {
  res.send("Hello World This Cara E-commerce plate form");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
