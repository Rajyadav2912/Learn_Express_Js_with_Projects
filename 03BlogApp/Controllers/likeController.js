// import model
const Post = require("../Models/postModel");
const Like = require("../Models/likeModel");

// like a post
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });

    // update the post collection basis on this
    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      error: "Error while like post",
    });
  }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // find and delete the like collection me se
    const deletedLike = await Like.findOneAndDelete({
      post: post,
      _id: like,
    });

    // updated the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      error: "Error while unlike post",
    });
  }
};

exports.dummyLink = async (req, res) => {
  res.send("this is dummy controller");
};
