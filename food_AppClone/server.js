const express = require("express");
const user = require("./controllers/user");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/db");
// const dotenv = config();
dotenv.config("dev")
connectDb();
const app = express();

// app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());
// app.use(morgan("dev"));
app.use("/api/v1/test", require("./routes/cloneRoute"));

app.get("/", (req, res) => {
  return res.status(200).send("<h2>Hey My app is Running</h2>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is listning on http://localhost:${PORT}`);
});

console.log("All Set I am backend developer I have tried w ====");
