const express = require("express");
const cors = require("cors");
const color = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const mongoose = require("mongoose");
const connectDb = require("./config/db");
dotenv.config();

connectDb();
// rest object
const app = express();
// middleware is cors which tell Meet me while going
app.use(cors());
//to use json format
app.use(express.json());
// morgan is also middleware
app.use(morgan("dev"));
// connectDb connection setting

//We will tell to the server about our routes we decleared using app.use

// Test router
app.use("/api/v1/test", require("./routes/testRoutes"));

// authenticate router
app.use("/api/v1/auth", require("./routes/authRouter"));

// User router
app.use("/api/v1/user", require("./routes/authRouter"));
// update router
app.use("/api/v1/update", require("./routes/authRouter"));
// resturant router

app.use("/api/v1/resturant", require("./routes/resturantRouter"));
// category router
app.use("/api/v1/category", require("./routes/catetoryRouter"));
//main route
// URL : http://localhost:8000
app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h2> Welcome to food server App created by Veer</h2>");
});
app.get("/food", (req, res) => {
  // route
  return res
    .status(200)
    .send("<h2> We deals with variety of Indian foods </h2>");
});
app.get("/home", (req, res) => {
  // route
  return res
    .status(200)
    .send(
      "<h2> So Why are you waiting for let's enjoy our master course </h2>"
    );
});

// PORT

const PORT = 8040;

app.listen(PORT, () => {
  console.log(
    `server is listning at PORT : http://localhost:${PORT} `.white.bgMagenta
  );
});
