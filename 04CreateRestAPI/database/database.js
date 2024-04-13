const mongoose = require("mongoose");

// const URL = "mongodb://127.0.0.1:27017/CreateApi";

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
    .then(console.log("DB connection Successfull"))
    .catch((error) => {
      console.log("DB Facing Connection Issues");
      console.error(error);
      process.exit(1);
    });
};

// exports using module keyword
module.exports = connectDB;
