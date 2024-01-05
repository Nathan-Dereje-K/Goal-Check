const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Ops! You forgot to put in your name :)"],
    },
    email: {
      type: String,
      required: [true, "Ops! You forgot to put in your email :)"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Ops! You forgot to put in your password :)"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
