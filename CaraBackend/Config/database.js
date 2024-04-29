const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("Database connected successfully"))
    .catch((err) => {
      console.log("DB connection Issues");
      console.log(err);
      process.exit(1);
    });
};
