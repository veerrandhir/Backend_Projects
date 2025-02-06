// const userModel = require("../models/CuserModel");

// const registerUser = async (req, res) => {
//   try {
//     const { userName, mobile, address } = req.body;
//     if (!userName || !mobile || !address) {
//       res.status(401).send({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const User = await userModel.create({
//       userName,
//       address,
//       mobile,
//     });
//     console.log(userName, address, mobile);
//     return res.status(500).send({
//       success: true,
//       message: "Sussessfully registered",
//     });
    

//   } catch (error) {
//     console.log("Error occured while registering New User", error);
//   }
// };

// module.exports = { registerUser };
