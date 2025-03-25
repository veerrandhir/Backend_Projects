// model is required
const categoryModel = require("../models/categoryModel");
// create category
const createCategoryController = async (req, res) => {
  try {
    const { title, image } = await req.body;
    if (!title) {
      return res.status(500).send({
        success: false,
        message: "Category is required",
      });
    }
    const newCategory = new categoryModel({ title, image });
    await newCategory.save();
    res.status(202).send({
      success: true,
      message: "All category saved",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(505).send({
      success: false,
      message: "Error in category API",
      error,
    });
  }
};

const getCategoryController = async (req, res) => {
  try {
    // const getFood = await req.body.title
    const getfoodCategory = await categoryModel.find({});
    if (!getfoodCategory) {
      return res.status(404).send({
        success: false,
        message: "category not found",
      });
    }
    res.status(202).send({
      success: true,
      message: "Hello you successfully get all food category",
      totalCount: getfoodCategory,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Unable to find category",
    });
  }
};

// update category controller
const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, image } = req.body;
    if (!title) {
      return res.send({
        message: "Title is required",
      });
    }
    const newCategory = await categoryModel.findByIdAndUpdate(
      id,
      { title, image },
      { new: true }
    );
    if (!newCategory) {
      return res.send({
        message: "Title is required",
      });
    }
    res.status(202).send({
      success: true,
      message: "Category successfully updated",
      newCategory,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in update category API",
    });
  }
};
const deleteCategoryController = async (req, res) => {
  try {
    //Get Id form params
    const { id } = await req.params;
    if (!id) {
      return res.send({
        message: "Id not found",
      });
    }
    // delete category from id
    await categoryModel.findOneAndDelete(id );
    res.status(202).send({
      success: true,
      message: "Category deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error happened in delete Category Controller API",
      error,
    });
  }
};
module.exports = {
  createCategoryController,
  getCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
