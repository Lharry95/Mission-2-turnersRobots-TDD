# Turners Car Insurance — API 4: Claim History converted to risk rating

## Overview

This API is part of the Turners Car Insurance project, built using **Test-Driven Development (TDD)**. It accepts a users claim history and returns a suggested risk rating.

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
│   └── riskRating.js          # Business logic for calculating risk rating
├── test/
│   └── riskRating.test.js     # Jest unit tests
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

### `POST /riskRating`

Calculates a risk rating based on the user's claim history.

**Request Body**

```json
{
  "claimHistory": "I crashed my car. That's the only crash I had"
}
```

**Success Response**

```json
{
  "riskRating": 2
}
```

**Error Response** (invalid or missing inputs)

```json
{
  "error": "Error: invalid input - must be string"
}
```

or

```json
{
  "error": "Error! please enter claim History"
}
```

---

## Tests

5 Jest unit tests written using TDD — all passing ✅

---

## Author

Lharyzza Va'ai-Ah Hong — Mission 2, Level 5 Advanced, Mission Ready 2026
