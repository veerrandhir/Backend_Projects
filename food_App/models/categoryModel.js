const mongoose = require("mongoose");

// .. Schema define
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://assets.zenn.com/strapi_assets/food_logo_5fbb88038c.png",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
