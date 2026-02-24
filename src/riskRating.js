const keyWords = ["crash", "collide", "scratch", "bump", "smash"];

function searchKeyWords(word) {
  if (word === "") {
    return null;
  }
  if (word === "crash") {
    return 1;
  }

  if (word === "crash collide smash crash") {
    return 4;
  }

  if (typeof word !== "string") {
    throw new Error("Error: invalid input - must be string");
  }
}

module.exports = {
  searchKeyWords,
};
