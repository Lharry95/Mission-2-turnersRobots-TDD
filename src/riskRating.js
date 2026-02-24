function calculateRiskRating(claimHistory) {
  const keyWords = ["crash", "collide", "scratch", "bump", "smash"];

  if (typeof claimHistory !== "string") {
    throw new Error("Error: invalid input - must be string");
  }

  if (!claimHistory.trim()) {
    return null;
  }

  const numberOfKeyWords = claimHistory
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => keyWords.includes(word)).length;

  return Math.min(numberOfKeyWords, 5);
}

module.exports = {
  calculateRiskRating,
};
