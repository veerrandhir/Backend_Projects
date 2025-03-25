const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createCategoryController,
  getCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryController");
const router = express.Router();

// route
// create Resturant // post method
router.post("/create", createCategoryController);

// get caregory router

router.get("/get", getCategoryController);


// update category
router.post("/update/:id", updateCategoryController);

// delete Category 
router.delete("/delete/:id", deleteCategoryController)
module.exports = router;
