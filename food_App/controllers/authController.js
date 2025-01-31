// Register User
// We we create our controller to register user
const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;
    if (!userName || !email || !password || !phone) {
      return res.status(500).send({
        success: false,
        message: "All fields are Required",
      });
    }

    const existing = await userModel.findOne({ userName });
    if (existing) {
      return res.status(400).send({
        success: false,
        message: "user already exist please login",
      });
    }
    console.log(userName, email);
    const user = await userModel.create({
      userName,
      email,
      password,
      address,
      phone,
    });
    return res.status(201).send({
      success: true,
      message: "User Successfully created",
    });
  } catch (error) {
    console.log("Got ERROR ", error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

// Checks for existing users
module.exports = { registerController };
