const mongoose = require("mongoose");
const colors = require("colors")

// connect db
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo DB connceted Successfully`.white.bgGreen);
  } catch (error) {
    console.log("Db Connection failed ERROR is :", error);
    process.exit(1);
  }
};

module.exports = connectDb;