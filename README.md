# Foundation Program — Assignment 1

**Total Marks: 60**

This assignment covers fundamental JavaScript concepts including data types, truthy/falsy values, switch statements, string methods, conditions, default parameters, calculations, and arrow functions.

---

## 📌 Assignment Overview

| Question   | Topic                      |  Marks |
| ---------- | -------------------------- | -----: |
| Question 1 | Value Detective            |     10 |
| Question 2 | Bangladesh Weekend Machine |     10 |
| Question 3 | Username Gatekeeper        |     10 |
| Question 4 | Dhaka CNG Fare Meter       |     15 |
| Question 5 | Run Chase Commentator      |     15 |
| **Total**  |                            | **60** |

---

## 📝 Question 1: Value Detective

Write a function `describeValue` that takes any value and returns:

```text
<type of the value> | <truthy or falsy>
```

### Examples

```javascript
describeValue("hello");
// "string | truthy"

describeValue("");
// "string | falsy"

describeValue(25);
// "number | truthy"

describeValue(0);
// "number | falsy"

describeValue(true);
// "boolean | truthy"

describeValue(null);
// "object | falsy"

describeValue(undefined);
// "undefined | falsy"
```

### Concepts Used

* `typeof`
* Truthy and falsy values
* `if` statement
* Template strings

### Special Cases

```javascript
describeValue("0");
describeValue(NaN);
describeValue(null);
```

---

## 📝 Question 2: Bangladesh Weekend Machine

Write a function `getDayType` that determines whether a day is a weekend or working day.

### Rules

| Input            | Return        |
| ---------------- | ------------- |
| Friday, Saturday | `Weekend`     |
| Sunday–Thursday  | `Working Day` |
| Anything else    | `Invalid Day` |

The function must work regardless of letter case.

### Examples

```javascript
getDayType("Friday");
// "Weekend"

getDayType("friday");
// "Weekend"

getDayType("MONDAY");
// "Working Day"

getDayType("Bandarban");
// "Invalid Day"
```

### Requirements

* Must use `switch case`
* Must not use `if / else`
* Convert the input to a consistent letter case before the switch

### Concepts Used

* `switch`
* `case`
* `break`
* `toLowerCase()`

---

## 📝 Question 3: Username Gatekeeper

Write a function `validateUsername` that checks a username according to these rules **in the given order**.

### Rules

1. Shorter than 4 characters → `Too Short`
2. Contains a space → `No Space Allowed`
3. Contains `admin` anywhere, regardless of letter case → `Reserved Word`
4. Otherwise → `Available`

### Examples

```javascript
validateUsername("rahim123");
// "Available"

validateUsername("ab");
// "Too Short"

validateUsername("a b");
// "Too Short"

validateUsername("abcd");
// "Available"

validateUsername("rahim islam");
// "No Space Allowed"

validateUsername("superadmin99");
// "Reserved Word"

validateUsername("Admin_Rahim");
// "Reserved Word"
```

### Concepts Used

* `.length`
* `.includes()`
* `.toLowerCase()`
* `if / else if / else`

> **Important:** The order of the conditions matters.

---

## 📝 Question 4: Dhaka CNG Fare Meter

Write a function:

```javascript
getCngFare(distance, isNight, waitingMinutes)
```

that calculates the total CNG fare.

### Fare Rules

* Minimum fare: **50 taka**
* First **2 km** are covered by the minimum fare
* Every km after 2 km costs **15 taka**
* Waiting charge: **2 taka per minute**
* At night, add **20%** to the entire fare
* `isNight` should default to `false`
* `waitingMinutes` should default to `0`
* Return only the number

### Examples

| Call                       | Return |
| -------------------------- | -----: |
| `getCngFare(2)`            |   `50` |
| `getCngFare(1)`            |   `50` |
| `getCngFare(5)`            |   `95` |
| `getCngFare(10)`           |  `170` |
| `getCngFare(5, false, 10)` |  `115` |
| `getCngFare(5, true)`      |  `114` |
| `getCngFare(5, true, 10)`  |  `138` |

### Example Calculation

For:

```javascript
getCngFare(5, true, 10)
```

Distance fare:

```text
50 + (5 - 2) × 15
= 95
```

Waiting fare:

```text
10 × 2 = 20
```

Total before night charge:

```text
95 + 20 = 115
```

Night charge:

```text
115 × 1.20 = 138
```

### Concepts Used

* Function parameters
* Default parameters
* `let`
* Arithmetic operators
* Conditional statements

---

## 📝 Question 5: Run Chase Commentator

Write an arrow function:

```javascript
const getChaseVerdict = (target, scored, ballsLeft) => {
    // ...
};
```

The function determines the situation of a cricket run chase.

### Step 1: Calculate Runs Needed

```javascript
runsNeeded = target - scored;
```

If `runsNeeded` is **0 or less**:

```text
Won
```

### Step 2: Check Remaining Balls

If `ballsLeft` is **0 or less**:

```text
Lost
```

### Step 3: Calculate Required Run Rate

```javascript
requiredRate = (runsNeeded / ballsLeft) * 6;
```

### Verdict Rules

| Required Rate         | Verdict             |
| --------------------- | ------------------- |
| 6 or less             | `Comfortable`       |
| More than 6, up to 12 | `Tough`             |
| More than 12          | `Almost Impossible` |

### Return Format

```text
Need <runsNeeded> runs in <ballsLeft> balls | <verdict>
```

### Examples

```javascript
getChaseVerdict(200, 200, 12);
// "Won"

getChaseVerdict(200, 190, 0);
// "Lost"

getChaseVerdict(100, 90, 12);
// "Need 10 runs in 12 balls | Comfortable"

getChaseVerdict(100, 80, 12);
// "Need 20 runs in 12 balls | Tough"

getChaseVerdict(100, 70, 12);
// "Need 30 runs in 12 balls | Almost Impossible"

getChaseVerdict(150, 149, 1);
// "Need 1 runs in 1 balls | Comfortable"
```

### Concepts Used

* Arrow functions
* Variables
* Conditional statements
* Arithmetic calculations
* Template strings

---

## 💻 Technologies Used

* JavaScript
* ES6+ Syntax

---

## 🎯 Learning Objectives

Through this assignment, the following JavaScript fundamentals are practiced:

* Data types and `typeof`
* Truthy and falsy values
* Conditional statements
* `switch` statements
* String methods
* Functions
* Default parameters
* Arithmetic operations
* Arrow functions
* Template literals
* Logical problem solving

---

