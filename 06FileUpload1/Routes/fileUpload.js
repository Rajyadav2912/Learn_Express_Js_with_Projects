const express = require("express");

const router = express.Router();

const { localfileUpload } = require("../Controller/fileUpload");

// api routes

router.post("/localFileUpload", localfileUpload);

module.exports = router;
