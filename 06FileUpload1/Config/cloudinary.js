const cloudinary = require("cloudinary");

require("dotenv").config();

exports.cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("Cloudinary connection successful");
  } catch (error) {
    console.error(error);
    console.log("Cloudinary connection failed");
  }
};
