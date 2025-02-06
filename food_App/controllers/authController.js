// Register User
// We create our controller to register user
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt"); // ✅ Import bcrypt
const JWT = require("jsonwebtoken");
const { param } = require("../routes/authRouter");

const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address, answer } = req.body;

    if (!userName || !email || !password || !phone || !answer) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(400).send({
        success: false,
        message: "User already exists, please login",
      });
    }

    // ✅ Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      userName,
      email,
      password: hashedPassword, // 🔥 Save hashed password
      address,
      phone,
      answer,
    });

    return res.status(201).send({
      success: true,
      message: "User successfully created",
    });
  } catch (error) {
    console.log("Error during registration:", error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

// Login user

const loginUser = async (req, res) => {
  try {
    console.log("Login request received:", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    console.log("User found:", user);

    // ✅ Compare hashed password with entered password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //  token generation through jwtwebtoken
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log("Password matched ✅");
    // user.password = undefined;
    return res.status(200).send({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Error occurred during login: ", error);
    return res.status(500).send({
      success: false,
      message: "Error in login API",
      error,
    });
  }
};

const getUserController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.id });
    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    user.password = undefined;
    res.status(201).send({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error happened while getting User details due to Token",
      error,
    });
  }
};

// Update user

const updateUserController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.id });
    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    // Update
    const { userName, address, phone } = req.body;
    if (userName) {
      user.userName = userName;
    }
    if (address) {
      user.address = address;
    }
    if (phone) {
      user.phone = phone;
    }
    await user.save();
    res.status(202).send({
      success: true,
      message: "User details udated",
      user,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Error while updating user",
      error,
    });
  }
};

// Reset password
const updatePasswordController = async (req, res) => {
  try {
    // find user
    const user = await userModel.findById({ _id: req.body.id });
    // validate user
    if (!user) {
      return res.status(406).send({
        success: false,
        message: "User not found",
        error,
      });
      // get Data from user
    }
    const { oldPassword, newPassword } = req.body; // postman
    if (!oldPassword || !newPassword) {
      return res.status(500).send({
        success: false,
        message: "Please provide Old or new Password",
      });
    }
    // ✅ Compare hashed password with entered password
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid oldpassword",
      });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    // console.log(user.password);
    await user.save();
    res.status(200).send({
      success: true,
      message: "password updated successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Unable to resert password",
      error,
    });
  }
};

// reset password controller
const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    // validation
    if (!email || !newPassword || !answer) {
      return res.status(404).send({
        success: false,
        message:
          "All fields are required such as email, newPassword and answer",
      });
    }
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email or answer not matched",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "password Reset successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error occured in RESET",
      error,
    });
  }
};
// delete account by id
const deleteUserController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Successfully deleted account",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Unable to delete account due to some Error in delete API",
      error,
    });
  }
};
module.exports = {
  registerController,
  loginUser,
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteUserController,
};
