const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
  getAllUsers,
  updateUser,
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

router.put("/:id", updateUser);

module.exports = router;
