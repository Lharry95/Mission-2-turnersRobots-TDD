const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");
const dotenv = require("dotenv");
const { calculateRiskRating } = require("./src/riskRating");

const app = express();
dotenv.config();

app.get("/claimHistory", (req, res) => {
  res.json({
    keywords: _.sample(keywords),
  });
});

app.post("/riskRating", () => {});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("API Server is running..."));
