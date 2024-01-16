const asyncHandler = require("express-async-handler");
const Goals = require("../models/goalModel");
const User = require("../models/userModel");

// The GET
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find({
    user: req.user.id,
  });
  res.status(200).json(goals);
});

// The POST
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a valid goal");
  }
  // Create goal
  const goal = await Goals.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(201).json(goal);
});

// The PUT
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not found !");
  }

  // Check the user
  const user = await User.findById(req.user.id);
  if (!user) {
    throw new Error("Ops! User not found!");
  }

  // Making sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Ops! Unauthorized goal User.");
  }

  const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

//The Delete
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found !!");
  }

  // Check the user
  const user = await User.findById(req.user.id);
  if (!user) {
    throw new Error("Ops! User not found!");
  }

  // Making sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Ops! Unauthorized goal User.");
  }

  // await goal.remove(); Depricated !!
  await Goals.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
