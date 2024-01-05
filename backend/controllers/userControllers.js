// Functions registerUser, loginUser , and getMe

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "user Registered!",
  });
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "user Login",
  });
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Dispaly user data",
  });
});
module.exports = { registerUser, loginUser, getMe };
