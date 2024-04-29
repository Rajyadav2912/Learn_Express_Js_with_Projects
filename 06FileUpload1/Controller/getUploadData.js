const File = require("../Models/file");

exports.getUploadData = async (req, res) => {
  try {
    const fileData = await File.find({});
    res.status(200).json({
      success: true,
      data: fileData,
      message: "All Data Get Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
};

// exports.getUser = async (req, res) => {
//   try {
//     const userData = await User.find({});
//     res.json({ success: true, data: userData });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error });
//   }
// };
