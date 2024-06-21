// auth , isStudent , isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    // extract jwt token
    // Pending other way to fetch token

    console.log("Cookie : ", req.cookies.token);
    console.log("Token : ", req.body.token);
    console.log("Authorization : ", req.header("Authorization"));

    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token || token === undefined) {
      return res.status(401).json({
        success: false,
        message: "Token Missing Unauthorized",
      });
    }

    // verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_TOKEN);

      console.log(payload);

      req.user = payload;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Token Invalid Unauthorized",
      });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while verifying the token",
    });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(401).json({
        success: false,
        message: "This is a Protect route for students",
      });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User role is not matching",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a Protect route for admin",
      });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User role is not matching",
    });
  }
};
