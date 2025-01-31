const mongoose = require("mongoose");

const colors = require("colors");
// Mongodb database connection

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Finally Connected to database "Ready To Go" ${mongoose.connection.host}`.bgBlack.bgCyan
    );
  } catch (error) {
    console.log("Opps Here is a DB error", error);
    process.exit(1); // Exit the process on DB failure
  }
};
module.exports = connectDb;
