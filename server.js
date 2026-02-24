const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { calculateRiskRating } = require("./src/riskRating");

const app = express();
dotenv.config();

app.post("/riskRating", (req, res) => {
  res.json({
    keywords: _.sample(keywords),
  });
});

app.post("/riskRating", () => {});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("API Server is running..."));
