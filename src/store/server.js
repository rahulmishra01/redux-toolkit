const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
const model = require("./router");
app.use(express.json());
app.use(cors());
app.use("/user", model);
dotenv.config();
const URL = process.env.MONGOOSE_URL;
mongoose
  .connect(URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("somthing went wrong", error);
  });

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
