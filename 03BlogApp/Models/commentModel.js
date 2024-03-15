// import mongoose
const mongoose = require("mongoose");

// router handler
const commentSchema = new mongoose.Schema({
  // konsi post pe comment kiya hai
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // reference to the post model
  },
  // kis user ne comment kiya hn
  user: {
    type: String,
    require: true,
  },
  // kya comment kiya hai
  body: {
    type: String,
    require: true,
  },
});

// export
module.exports = mongoose.model("Comment", commentSchema);
