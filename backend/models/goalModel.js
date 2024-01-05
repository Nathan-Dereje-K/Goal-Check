const mongoose = require("mongoose");

const gaolSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Ops! You forgot this field!"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Goals", gaolSchema);
