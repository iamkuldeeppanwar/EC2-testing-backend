require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    name: process.env.USER,
    message: "Hosted Successfully!",
  });
});

app.listen(() => {
  console.log(`Server is running on ${port}`);
});
