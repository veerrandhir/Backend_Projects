const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,  // Fixed casing
      required: [true, "User is required"],
    },
    address: {
      type: Array,
    },
    mobile: {
      type: String,  // Fixed casing
      required: true
    }
  },
  { timestamps: true } 
);

const User = mongoose.model("User", userSchema);  // Fixed model creation
module.exports = User;
