const Product = require("../model/productModel");
const { link } = require("../routes/productRoutes");

const getProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
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

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortfix = sort.replace(",", " ");
    apiData = apiData.sort(sortfix);
  }

  if (select) {
    let selectfix = select.split(",").join(" ");

    apiData = apiData.select(selectfix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  const MyProduct = await apiData;

  res.status(200).json({ MyProduct });
};

const getProductsTesting = async (req, res) => {
  const MyProduct = await Product.find(req.query).sort("name -price");
  console.log("😍 File: products.Js ~ Line 10 : ", req.query);

  res.status(200).json({ MyProduct });
};

module.exports = { getProducts, getProductsTesting };
