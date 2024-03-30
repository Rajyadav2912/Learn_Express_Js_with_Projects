const File = require("../Models/file");

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