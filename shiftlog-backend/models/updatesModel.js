const mongoose = require("mongoose");

const updateSchema = mongoose.Schema(
  {
    // user_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    title: {
      type: String,
      required: true,
    },
    update: {
      type: String,
      required: true,
    },
    importance: {
      type: String,
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

module.exports = mongoose.model("Update", updateSchema);
