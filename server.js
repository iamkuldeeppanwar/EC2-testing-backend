require("dotenv").config();
const express = require("express");

const app = express();

// Correctly setting the port to use the environment variable or default to 8080
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    name: process.env.USER || "Default User", // Use a default value if USER is not defined in .env
    message: "Hosted Successfully!",
  });
});

// Specify the port parameter in app.listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
