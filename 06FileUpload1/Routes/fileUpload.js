const express = require("express");

const router = express.Router();

const {
  localfileUpload,
  imageUpload,
  videoUpload,
  imageSizeReducer,
} = require("../Controller/fileUpload");

const { getUploadData } = require("../Controller/getUploadData");

// api routes
router.post("/localFileUpload", localfileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageSizeReducer", imageSizeReducer);
router.get("/", getUploadData);

module.exports = router;
