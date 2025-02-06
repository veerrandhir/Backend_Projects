const express = require("express");
const {
  registerController,
  loginUser,
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// No our router is set and we are ready to create routers.
router.post("/register", registerController);
//login
router.post("/login", loginUser);

router.get("/getUser", authMiddleware, getUserController);
router.put("/updateUser", authMiddleware, updateUserController);
router.put("/updatepassword", authMiddleware, updatePasswordController);
router.post("/resetpassword", authMiddleware, resetPasswordController);
router.delete("/deleteUser/:id", authMiddleware, deleteUserController);

module.exports = router;
