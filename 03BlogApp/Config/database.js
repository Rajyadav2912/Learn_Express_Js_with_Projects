// create mongoose instance and fetch mongoose
const mongoose = require("mongoose");

// create connectivity arrow-function
const connectWithDb = () => {
  // write connect method in mongodb .connect(Urt, (flags newurlparser, topology))
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB connection Successfull"))
    .catch((error) => {
      console.log("DB Facing Connection Issues");
      console.error(error);
      process.exit(1);
    });
};

// exports using module keyword
module.exports = connectWithDb;
