const Product = require("../model/productModel");

const getProducts = async (req, res) => {
  const { company, name, featured } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }

  if (name) {
    // basically just use the 1st letter what you search ex: ipho , result: iphone , iphone10 , iphone12
    // so we use regex to search for the first letter of the name
    queryObject.name = { $regex: name, $options: "i" };
  }

  console.log(queryObject);

  const myData = await Product.find(queryObject);

  res.status(200).json({ myData });
};

const getProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  console.log("😍 File: products.Js ~ Line 10 : ", req.query);

  res.status(200).json({ myData });
};

module.exports = { getProducts, getProductsTesting };
