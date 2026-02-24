const { searchKeyWords } = require("./app");

describe("Tests related to claimHistory", () => {
  test("Function has an input with only one keyword included", () => {
    expect(searchKeyWords("crash")).toBe(1);
  });

  test("Function has an empty input box", () => {
    expect(searchKeyWords("")).toBeNull();
  });

  test("Function has four keywords included in claim history and therefore returns '4', duplicate keywords count towards the total", () => {
    expect(searchKeyWords("crash collide smash crash")).toBe(4);
  });

  test("Function has an input with only numbers included", () => {
    expect(searchKeyWords(123)).toBe("Error: invalid input");
  });
  // test("Function has an input of more than 5 keywords when risk rating is only up to 5", () => {
  //   expect(searchKeyWords()).
  // })
});
