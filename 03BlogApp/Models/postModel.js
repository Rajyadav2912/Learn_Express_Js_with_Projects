// import mongoose
const mongoose = require("mongoose");

// route hanlder
const postSchema = new mongoose.Schema({
  // post ka title ky hn
  title: {
    type: String,
    require: true,
  },
  // post ki body me ky hn
  body: {
    type: String,
    require: true,
  },
  // post ke puree like ek array me store honge using Id
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  // post ke puree comment ek array me store honge using Id
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

// exports
module.exports = mongoose.model("Post", postSchema);
