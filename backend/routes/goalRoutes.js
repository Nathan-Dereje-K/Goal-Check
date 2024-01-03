const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
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

router.post("/", (req, res) => {
  res.status(201).json({
    message: "New goal created",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    message: `updated with this id,  ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `Deleted with this id,  ${req.params.id}`,
  });
});

module.exports = router;
