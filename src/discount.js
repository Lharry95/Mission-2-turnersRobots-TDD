function calculateDiscount(age, experience) {
  let discount = 0;

  // Validate inputs - return error if negative or non-numeric
  if (isNaN(age) || isNaN(experience) || age < 0 || experience < 0) {
    return "error";
  }

  // Add 5% discount for drivers aged 25 or older
  if (age >= 25) {
    discount += 5;
  }

  // Add extra 5% discount for drivers aged 40 or older
  if (age >= 40) {
    discount += 5;
  }

  // Add 5% discount for drivers with 5 or more years experience
  if (experience >= 5) {
    discount += 5;
  }

  // Add extra 5% discount for drivers with 10 or more years experience
  if (experience >= 10) {
    discount += 5;
  }

  return discount;
}

module.exports = { calculateDiscount };
