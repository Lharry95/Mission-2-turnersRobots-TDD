const express = require("express");
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

app.get("/riskRating", (req, res) => {
  test("responds with json content", () => {
    expect({ riskRating: rating });
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("API Server is running..."));
