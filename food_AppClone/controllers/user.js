const newUser = require("../models/CuserModel"); // Fixed import

const registerUser = async (req, res) => {
  try {
    const { userName, mobile, address } = req.body;

    if (!userName || !mobile || !address) {
      return res.status(401).send({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await newUser.create({ userName, address, mobile });

    console.log(userName, address, mobile);
    return res.status(201).send({
      success: true,
      message: "Successfully registered",
    });

  } catch (error) {
    console.log("Oops! Some error occurred", error);
    res.status(500).send({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = { registerUser };
