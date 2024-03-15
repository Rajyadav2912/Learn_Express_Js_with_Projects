// server inhanstiate
const express = require("express");

// create router
const router = express.Router();

// Import Controller
const {
  dummyLink,
  likePost,
  unlikePost,
} = require("../Controllers/LikeController");

const { createComment } = require("../Controllers/commentController");
const { createPost, getAllPosts } = require("../Controllers/PostController");

// Mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

// Export
module.exports = router;
