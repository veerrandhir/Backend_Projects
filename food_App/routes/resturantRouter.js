const express = require("express");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/resturantController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// route
// create Resturant // post method

router.post("/create", authMiddleware, createResturantController);
router.get("/getAll", getAllResturantController);
router.get("/get/:id", getResturantByIdController);
// delete resturant
router.delete("/delete/:id", deleteResturantController);
module.exports = router;
