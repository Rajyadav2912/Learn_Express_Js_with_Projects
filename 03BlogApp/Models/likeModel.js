// import mongoose
const mongoose = require("mongoose");

// router handler
const likeSchema = new mongoose.Schema({
  // konsi post pe like kiya hai
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // reference to the post model
  },
  // kis user ne like kiya hai
  user: {
    type: String,
    require: true,
  },
});

// exports
module.exports = mongoose.model("Like", likeSchema);
