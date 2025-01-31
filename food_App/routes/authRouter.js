const express = require("express");
const { registerController } = require("../controllers/authController");
const router = express.Router();

// No our router is set and we are ready to create routers.
router.post("/register", registerController);

module.exports = router ;
