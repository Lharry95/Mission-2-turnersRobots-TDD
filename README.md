# Turners Car Insurance — API 4: Driver's Age & Experience to Discount Rate

## Overview

This API is part of the Turners Car Insurance project, built using **Test-Driven Development (TDD)**. It accepts a driver's age and years of experience, and returns a suggested insurance discount rate.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Testing:** Jest

---

## Project Structure

```
mission-2-turners-robots/
├── src/
│   └── discount.js          # Business logic for calculating discount rate
├── tests/
│   └── discount.test.js     # Jest unit tests
├── server.js                # Express API server
├── package.json
└── README.md
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
node server.js
```

The API will be running at `http://localhost:3000`

### 3. Run the tests

```bash
npm test
```

---

## API Reference

### `POST /discount`

Calculates a discount rate based on the driver's age and driving experience.

**Request Body**

```json
{
  "age": 30,
  "experience": 6
}
```

**Success Response**

```json
{
  "discount_rate": 10
}
```

**Error Response** (invalid or missing inputs)

```json
{
  "error": "there is an error"
}
```

---

## Business Rules

| Condition                      | Discount |
| ------------------------------ | -------- |
| Driver aged 25 or older        | +5%      |
| Driver aged 40 or older        | +5%      |
| 5 or more years of experience  | +5%      |
| 10 or more years of experience | +5%      |
| **Maximum discount**           | **20%**  |

Invalid inputs (negative numbers or non-numeric values) return an error.

---

## Tests

5 Jest unit tests written using TDD — all passing ✅

| Test                                | Input                      | Expected Output |
| ----------------------------------- | -------------------------- | --------------- |
| Age threshold, no experience        | age: 25, experience: 0     | 5               |
| Age threshold + experience discount | age: 25, experience: 5     | 10              |
| Maximum discount                    | age: 40, experience: 10    | 20              |
| Invalid — negative age              | age: -1, experience: 5     | "error"         |
| Invalid — non-numeric experience    | age: 25, experience: "abc" | "error"         |

---

## Author

Hayley — Mission 2, Level 5 Advanced, Mission Ready 2026
