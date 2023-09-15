const mongoose = require("mongoose");

const shiftSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    ticket: {
      type: String,
      required: [true, "Please enter a ticket!"],
    },
    walkthrough: {
      type: String,
      required: [true, "Please enter a walkthrough!"],
    },
    critical_updates: {
      type: String,
      required: [true, "Please enter an alarm!"],
    },
    ticket_updates: {
      type: String,
    },
    log_name: {
      type: String,
      required: [true, "Please enter your name"],
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
