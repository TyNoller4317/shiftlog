const mongoose = require("mongoose");

const shiftSchema = mongoose.Schema(
  {
    // user_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
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
<<<<<<< HEAD
=======
      default: "N/A",
>>>>>>> 87ffa30 (Updated the design of the shiftlog as well as adding search functionality to the shiftlogs.)
      required: [true, "Please enter an alarm!"],
    },
    ticket_updates: {
      type: String,
<<<<<<< HEAD
=======
      default: "N/A",
>>>>>>> 87ffa30 (Updated the design of the shiftlog as well as adding search functionality to the shiftlogs.)
    },
    log_name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Shift", shiftSchema);
