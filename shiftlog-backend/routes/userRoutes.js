const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
  getAllUsers,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

//register
router.post("/register", registerUser);

//login
router.post("/login", loginUser);

//get current user
router.get("/currentUser/:id", validateToken, currentUser);

//get all users
router.get("/", getAllUsers);

module.exports = router;
