const express = require("express");
const app = express();

// import database
const connectDB = require("./database/database");

// load .env configuration
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// import routes
const product_routes = require("./routes/productRoutes");

app.get("/", (req, res) => {
  res.send("Hello World! My name is Raj Yadav");
});

// adding middleware
app.use("/api/products", product_routes);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`${PORT} Successfully started`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
