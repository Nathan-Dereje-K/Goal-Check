const mongoose = require("mongoose");

const gaolSchema = mongoose.Schema(
  {
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
