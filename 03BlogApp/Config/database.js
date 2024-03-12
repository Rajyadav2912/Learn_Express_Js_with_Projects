const mongoose = require("mongoose");

const connectWithDb = () => {
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

module.exports = connectWithDb;
