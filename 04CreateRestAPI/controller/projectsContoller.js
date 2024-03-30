const Product = require("../model/productModel");

const getProducts = async (req, res) => {
  const myData = await Product.find(req.query);

  res.status(200).json(myData);
};

const getProductsTesting = async (req, res) => {
  const myData = await Product.find({ company: "Apple" });

  res.status(200).json(myData);
};

module.exports = { getProducts, getProductsTesting };
