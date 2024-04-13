const File = require("../Models/file");
const cloudinary = require("cloudinary").v2;

// require("dotenv").config();

// localfileupload -> handler

exports.localfileUpload = async (req, res) => {
  try {
    // fetch file from request
    const file = req.files.file;
    console.log("File upload ho gyi hai=> ", file);

    // create path where file need to be stored on server
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

    console.log("Path : ", path);

    // add path to the move file
    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "Local file Uploaded Successfully",
    });
  } catch (error) {
    console.log("Not able to upload the file on server");
    console.error(error);
  }
};

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  console.log("Temp file path: ", file.tempFilepath);

  options.resource_type = "auto";

  return await cloudinary.uploader
    .upload(file.tempFilepath, options)
    .then(console.log("upload successfully"))
    .catch((error) => console.log(error));
}

// image upload ka handler
exports.imageUpload = async (req, res) => {
  try {
    // data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.image;

    console.log("File", file);

    // validation
    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("File Type : ", fileType);

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File Formate or type not supported",
      });
    }

    // file format is supported
    console.log("uploading to folder");
    // cloudinary.uploader.upload(file.tempFilepath, "Folder");
    const response = await uploadFileToCloudinary(file, "new folder");
    console.log(response);

    // db me entry save krna hn
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    // fileData.save();

    res.json({
      success: true,
      imagesUrl: response.secure_url,
      message: "Image Uploaded Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.videoUpload = async (req, res) => {
  try {
    // data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.video;
    console.log("File", file);

    // validation
    const supportedTypes = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("File Type : ", fileType);

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File Formate or type not supported",
      });
    }

    // file format is supported
    console.log("uploading to folder");
    const response = await uploadFileToCloudinary(file, "Folder");
    console.log(response);

    // db me entry save krna hn
    const fileData = await File.create({
      name,
      tags,
      email,
      videoUrl: response.secure_url,
    });

    res.json({
      success: true,
      videoUrl: response.secure_url,
      message: "Video Uploaded Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
