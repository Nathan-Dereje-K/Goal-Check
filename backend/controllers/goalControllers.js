const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    goals: [
      {
        id: 1,
        title: "Get Fit",
        description: "Lifting weights, getting stronger",
        completed: false,
      },
      {
        id: 2,
        title: "Get Fired",
        description: "Get fired from my job",
        completed: false,
      },
      {
        id: 3,
        title: "Get Rich",
        description: "Get rich quick",
        completed: false,
      },
    ],
  });
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.Text) {
    res.status(400);
    throw new Error("Please add a valid goal");
  }
  res.status(201).json({
    message: "New goal created",
  });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `updated goal  ${req.params.id}`,
  });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Deleted goal  ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
