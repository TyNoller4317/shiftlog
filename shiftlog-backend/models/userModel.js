const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username!"],
    },
    email: {
      type: String,
      required: [true, "Please enter a email!"],
      unique: [true, "Email adddress already taken"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password!"],
    },
    site: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
