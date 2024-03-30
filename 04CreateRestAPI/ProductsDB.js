const connectDB = require("./database/database");

const Product = require("./model/productModel");
const ProductJson = require("./products.json");

require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    await Product.deleteMany({});
    await Product.create(ProductJson);
    console.log("success");
  } catch (err) {
    console.log(err);
  }
};

start();
