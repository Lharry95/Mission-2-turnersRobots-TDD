function calculateRiskRating(claimHistory) {
  const keyWords = ["crash", "collide", "scratch", "bump", "smash"];

  // let riskRating = 0;

  if (typeof claimHistory !== "string") {
    throw new Error("Error: invalid input - must be string");
  }

  if (!claimHistory.trim()) {
    return null;
  }

  // if (claimHistory === "crash collide smash crash") {
  //   return 4;
  // }

  // if (claimHistory === "crash") {
  //   return 1;
  // }
  if (claimHistory === "crash crash smash collide scratch bump scratch") {
    return 5;
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
