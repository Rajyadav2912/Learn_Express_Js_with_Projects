const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    // get data
    const { name, email, password, role } = req.body;

    // check if user is already existing or not
    const ExistingUser = await User.findOne({ email });

    if (ExistingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already exists",
      });
    }

    // hash password
    let hashedPassword;

    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Error hashing password",
      });
    }

    // create entry for user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    // data fetched from server
    const { email, password } = req.body;

    // validate email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // check if user is already existing or registered user
    const ExistingUser = await User.findOne({ email });

    // if not registered user
    if (!ExistingUser) {
      return res.status(400).json({
        success: false,
        message: "User is not registered",
      });
    }

    const payload = {
      id: ExistingUser._id,
      email: ExistingUser.email,
      role: ExistingUser.role,
    };

    // verify password & genrate a JWT token
    if (await bcrypt.compare(password, ExistingUser.password)) {
      //  password is matches
      let token = jwt.sign(payload, process.env.JWT_TOKEN, {
        expiresIn: "2h",
      });

      ExistingUser.token = token;
      ExistingUser.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("cookie", token, options).status(200).json({
        success: true,
        token,
        ExistingUser,
        message: "User Logged in Successfully",
      });

      // res.status(200).json({
      //   success: true,
      //   token,
      //   ExistingUser,
      //   message: "User Logged in Successfully",
      // });
    } else {
      // password do not match
      return res.status(403).json({
        success: false,
        message: "Password Incorrect",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Login Failure",
    });
  }
};
