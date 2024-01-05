const asyncHandler = require("express-async-handler");
const Goals = require("../models/goalModel");

// The GET
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find();
  res.status(200).json(goals);
});

// The POST
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a valid goal");
  }
  const goal = await Goals.create({
    text: req.body.text,
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
  const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

//The Delete
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = Goals.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found !!");
  }
  await goal.remove();
  // await Goals.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
