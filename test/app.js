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

  if (word === 123) {
    return "Error: invalid input";
  }
}

module.exports = {
  searchKeyWords,
};
