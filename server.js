const express = require("express");
const { calculateDiscount } = require("./src/discount");

// Create the Express app
const app = express();

// Allow the app to read JSON from request bodies
app.use(express.json());

// POST /discount — accepts age and experience, returns a discount rate
app.post("/discount", (req, res) => {
  // Pull age and experience out of the request body
  const { age, experience } = req.body;

  // If either field is missing, return an error
  if (age === undefined || experience === undefined) {
    return res.status(400).json({ error: "there is an error" });
  }

  // Run the discount calculation using our logic from discount.js
  const result = calculateDiscount(age, experience);

  // If calculateDiscount returned "error", the inputs were invalid
  if (result === "error") {
    return res.status(400).json({ error: "there is an error" });
  }

  // All good — return the discount rate
  return res.status(200).json({ discount_rate: result });
});

// Start the server on port 3000 (or whatever PORT is set to in the environment)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Discount API running on port ${PORT}`);
});

// Export app so it can be used in tests with supertest
const dotenv = require("dotenv");
const { calculateRiskRating } = require("./src/riskRating");

const app = express();
app.use(express.json());
dotenv.config();

app.post("/riskRating", (req, res) => {
  const { claimHistory } = req.body;

  if (claimHistory === undefined) {
    return res.status(400).json({ error: "Error! please enter claim History" });
  }

  if (typeof claimHistory !== "string") {
    return res
      .status(400)
      .json({ error: "Error! Claim History must be a string!" });
  }

  if (!claimHistory.trim()) {
    return res.json({ riskRating: null });
  } else {
    const rating = calculateRiskRating(claimHistory);
    return res.json({ riskRating: rating });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("API Server is running..."));

module.exports = app;
