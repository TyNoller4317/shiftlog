const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@description Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are manditory!");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  //Hash password
  const hashPassword = await bycrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  console.log(`User created ${user}`);

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }

  res.json({ message: "Registered User" });
});

//@description Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are manditory");
  }

  const user = await User.findOne({ email });

  //compare password with hashed password
  if (user && (await bycrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    res.status(200).json({ accessToken, email, password });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
  res.json({ message: "Login User" });
});

//@description Update current user information
//@route PUT /api/users/:id
//@access private
const updateUser = asyncHandler(async (req, res) => {});

//@description Get current user information
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

//@description Get all users
//@route GET /api/users/current
//@access public
const getAllUsers = asyncHandler(async (req, res) => {
  const user = await User.find();

  res.status(200).json(user);
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  getAllUsers,
  updateUser,
};
