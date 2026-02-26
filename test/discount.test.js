//telling Jest to look for a function called calculateDiscount from your discount.js file
const { calculateDiscount } = require("../src/discount");

test("Driver exactly meets age threshold but lacks experience discount", () => {
  expect(calculateDiscount(25, 0)).toBe(5);
});

test("Driver exactly meets age threshold and qualifies for the experience discount", () => {
  expect(calculateDiscount(25, 5)).toBe(10);
});

test("Driver exactly meets age and experience maximum discount reached", () => {
  expect(calculateDiscount(40, 10)).toBe(20);
});

test("Invalid input — negative age value should return an error message rather than a discount rate", () => {
  expect(calculateDiscount(-1, 5)).toBe("error");
});

test("Invalid input — non-numeric experience value should return an error message rather than a discount rate", () => {
  expect(calculateDiscount(25, "abc")).toBe("error");
});
