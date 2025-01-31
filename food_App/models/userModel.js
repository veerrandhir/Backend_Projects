const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "username is required to login user"],
    },
    email: {
      type: String,
      required: [true, "Email is required to login user"],
    },
    password: {
      type: String,
      required: [true, "Please input a password to login in future"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      dafault:
        "https://cdn.vectorstock.com/i/1000v/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg ",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User ;
