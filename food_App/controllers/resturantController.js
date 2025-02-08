const returantModel = require("../models/returantModel");
const createResturantController = async (req, res) => {
  try {
    const resturantData = req.body;
    if (!resturantData.title || !resturantData.coords) {
      return res.status(500).send({
        success: false,
        message: "title and address is required",
      });
    }

    const newResturant = new returantModel({ resturantData });
    // save newResturant
    await newResturant.save();
    // send response and success code
    res.status(201).send({
      success: true,
      message: "New Resturant created successfully",
      newResturant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: " Error happened in creating Resturant",
      error,
    });
  }
};

const getAllResturantController = async (req, res) => {
  try {
    const resturant = await returantModel.find({});
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Successfully resturant found",
      countResturant: resturant.length,
      resturant,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Unable to Get resturents",
      error,
    });
  }
};
const getResturantByIdController = async (req, res) => {
  try {
    // find Id
    const resturantId = req.params.id;
    //  find resturant
    const resturant = await returantModel.findById(resturantId);
    if (!resturant) {
      return res.status(400).send({
        success: false,
        message: "Resturant not found",
      });
    }
    res.status(202).send({
      success: true,
      message: "Resturant found with given Id",
      resturant,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Error occures while finding",
      error,
    });
  }
};

// delete resturant
const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if(!resturantId){
      return res.status(404).send({
        success: false,
        message: "resturantId not found",
      });
    }

    await returantModel.findByIdAndDelete(resturantId);
    res.status(202).send({
      success: true,
      message: "Successfully deleted resturant",
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Unable to find and delete resturant",
      error,
    });
  }
};
module.exports = {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
};
