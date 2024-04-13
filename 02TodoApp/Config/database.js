const mongoose = require("mongoose");

// import PORT and mongodb url
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("DataBase Connection Successfull"))
    .catch((error) => {
      console.log("Issues in DB Connection");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
