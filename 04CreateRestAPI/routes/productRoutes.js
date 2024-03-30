const express = require("express");
const router = express.Router();

// Import controller
const {
  getProducts,
  getProductsTesting,
} = require("../controller/projectsContoller");

router.get("/", getProducts);
router.get("/testing", getProductsTesting);

// Export
module.exports = router;
