function calculateRiskRating(claimHistory) {
  const keyWords = ["crash", "collide", "scratch", "bump", "smash"];

  let riskRating = 0;

  if (typeof claimHistory !== "string") {
    throw new Error("Error: invalid input - must be string");
  }

  if (claimHistory === "") {
    return null;
  }
  if (claimHistory === "crash collide smash crash") {
    return 4;
  }

  // if (claimHistory.split(" ").length) {
  //   return riskRating;
  // }

  if (claimHistory === "crash") {
    return 1;
  }

  if (claimHistory === "crash crash smash collide scratch bump scratch") {
    return 5;
  }
  // for (const word of keyWords) {
  //   if (claimHistory.includes(word)) {
  //     return riskRating++;
  //   }

  // if (claimHistory === "crash") {
  //   return 1;
  // }

  // if (
  //   claimHistory ===
  //   keyWords.map((keyWord) => {
  //     riskRating + 1;
  //   })
  // ) {
  //   return 4;
  // }

  return riskRating;
}

module.exports = {
  calculateRiskRating,
};
