const mongoose = require("mongoose");

const shiftSchema = mongoose.Schema(
  {
    ticket: {
      type: String,
      required: [true, "Please enter a ticket!"],
    },
    customer: {
      type: String,
      required: [true, "Please enter a customer!"],
    },
    walkthrough: {
      type: String,
      required: [true, "Please enter a walkthrough!"],
    },
    alarms: {
      type: String,
      required: [true, "Please enter an alarm!"],
    },
    notes: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Shift", shiftSchema);
