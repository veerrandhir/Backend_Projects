const express = require("express");
const { registerUser } = require("../controllers/user");
// const {registerNewUser } = require("../controllers/registerUser")

const router = express.Router();

router.post("/register", registerUser);
// router.post("/new-user", registerNewUser);

module.exports = router;
