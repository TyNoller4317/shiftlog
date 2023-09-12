const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

//register
router.post("/register", registerUser);

//login
router.post("/login", loginUser);

module.exports = router;
