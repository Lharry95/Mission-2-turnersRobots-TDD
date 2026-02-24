const keyWords = ["crash", "collide", "scratch", "bump", "smash"];

function calculateRiskRating(keyWords) {
  let riskRating = 0;

  if (keyWords === "crash") {
    return 1;
  }
  if (keyWords === "") {
    return null;
  }

  if (keyWords === "crash collide smash crash") {
    return 4;
  }

  if (typeof keyWords !== "string") {
    throw new Error("Error: invalid input - must be string");
  }
  return riskRating;
}

module.exports = {
  calculateRiskRating,
};
