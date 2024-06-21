const express = require("express");
const router = express.Router();

const { login, signup } = require("../controller/Auth");
const { auth, isAdmin, isStudent } = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/login", login);

router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for test!",
  });
});

// protected routes
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for Student!",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for Admin!",
  });
});

module.exports = router;
