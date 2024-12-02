# Advent of Code 2024

This repository contains my solutions for the Advent of Code 2024 challenges. The solutions are written in JavaScript and are organized by day and part.
The solutions are made by me and may not be the most optimal or efficient solutions, but they work ;)))

Link to the Advent of Code website where you can find the puzzles: [Advent of Code](https://adventofcode.com/)

<details>
<summary>Day 1 solution</summary>
<br>
<details>
<summary>Part 1</summary>
<br>

# Code
```javascript
const fs = require("fs");

const solution = (input) => {
  const left = [];
  const right = [];
  const differences = [];
  let sum = 0;

  fs.readFile(input, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const lines = data.trim().split("\n");

    lines.forEach((line) => {
      const [l, r] = line.trim().split(/\s+/).map(Number);
      left.push(l);
      right.push(r);
    });

    console.log("left: ", left, "\n");
    console.log("right: ", right, "\n");

    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);

    console.log("left: ", left, "\n");
    console.log("right: ", right, "\n");

    for (let i = 0; i < left.length; i++) {
      differences.push(Math.abs(left[i] - right[i]));
    }
    console.log(differences);

    for (let i = 0; i < differences.length; i++) {
      sum += differences[i];
    }
    console.log("sum: ", sum);
  });
};

solution("input.txt");
```

# What it does

The code reads the input file and splits the lines into two arrays. The arrays are then sorted in ascending order.
The difference between the elements in the arrays is calculated and pushed into a new array.
The sum of the differences is then calculated and printed to the console.

## How the code works

1. Read the input file
- The function uses the Node.js fs module to read the file at the specified input path.
- It reads the file asynchronously and splits the contents into lines for processing.
- If there's an error while reading the file, it logs the error and exits early.

2. Extract the left and right values
- Each line of the file is assumed to contain two numbers separated by whitespace.
- The line is split into two parts, parsed into numbers, and stored in:
    left: Contains the first number from each line.
    right: Contains the second number from each line.

3. Sort the arrays
- The left and right arrays are sorted in ascending order using the Array.sort() method.

4. Calculate the differences
- The function calculates the absolute difference between each corresponding pair of numbers in left and right.
- The differences are stored in a differences array.

5. Calculate the sum
- The differences array is iterated through, and all values are added together to compute the total sum.

6. Print the result
- The final sum is printed to the console.

</details>

<details>
<summary>Part 2</summary>

# Code
```javascript
const fs = require("fs");

const solution = (input) => {
  const left = [];
  const right = [];

  fs.readFile(input, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const lines = data.trim().split("\n");

    lines.forEach((line) => {
      const [l, r] = line.trim().split(/\s+/).map(Number);
      left.push(l);
      right.push(r);
    });

    console.log("left: ", left, "\n");
    console.log("right: ", right, "\n");

    const appearances = {};
    let similarityScore = 0;
    for (let i = 0; i < right.length; i++) {
      const number = right[i];
      if (appearances[number] === undefined) {
        appearances[number] = 1;
      } else {
        appearances[number]++;
      }
    }
    console.log("appearances: ", appearances, "\n");

    for (let i = 0; i < left.length; i++) {
      const j = left[i];
      if (appearances[j] !== undefined) {
        similarityScore += appearances[j] * j;
      }
    }
    console.log("similarityScore: ", similarityScore);
  });
};

solution("input.txt");
```

# What it does

The code reads the input file and splits the lines into two arrays.
The code then calculates the similarity score between the two arrays.
The similarity score is calculated by multiplying the number of times a number appears in the right array by the number itself.
The final similarity score is then printed to the console.

## How the code works

1. Read the input file
- The function uses the Node.js fs module to read the file at the specified input path.
- It reads the file asynchronously and splits the contents into lines for processing.
- If there's an error while reading the file, it logs the error and exits early.

2. Extract the left and right values
- Each line of the file is assumed to contain two numbers separated by whitespace.
- The line is split into two parts, parsed into numbers, and stored in:
    left: Contains the first number from each line.
    right: Contains the second number from each line.

3. Count the appearances
- The function counts the number of times each number appears in the right array.
- It uses an object, appearances, to store the count of each number.

4. Calculate the similarity score
- The function iterates through the left array and checks if the number appears in the appearances object.
- If the number appears, the similarity score is increased by the product of the number and its count in the appearances object.

5. Print the result
- The final similarity score is printed to the console.

</details>
</details>


<details>
<summary>Day 2 solution</summary>
<br>
<details>
<summary>Part 1</summary>
<br>

# Code
```javascript
const fs = require("fs");

function isSafe(levels) {
  const nums = levels.split(" ").map(Number);

  const differences = [];
  for (let i = 0; i < nums.length - 1; i++) {
    differences.push(nums[i + 1] - nums[i]);
  }

  let allIncreasing = true;
  let allDecreasing = true;
  for (const diff of differences) {
    if (diff <= 0) {
      allIncreasing = false;
    }
    if (diff >= 0) {
      allDecreasing = false;
    }
  }

  if (!allIncreasing && !allDecreasing) {
    return false;
  }

  for (const diff of differences) {
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }
  }

  return true;
}

function countSafeReports(filename) {
  const data = fs.readFileSync(filename, "utf8");

  const levels = data.trim().split("\n");

  let safeCount = 0;
  for (const level of levels) {
    if (isSafe(level.trim())) {
      safeCount++;
    }
  }
  return safeCount;
}

console.log(countSafeReports("input2.txt"));

```

# What it does

The code reads the input file and checks if the levels are safe.
The levels are considered safe if they meet the following criteria:
- The differences between the levels are either increasing or decreasing.
- The differences between the levels are between 1 and 3.
The code counts the number of safe reports and prints the count to the console.

## How the code works

1. Read the input file
- The function uses the Node.js fs module to read the file at the specified input path.
- It reads the file synchronously and splits the contents into lines for processing.

2. Check if the levels are safe
- The function isSafe takes a string of levels as input and checks if the levels are safe.
- It splits the levels into numbers and calculates the differences between adjacent levels.
- It checks if the differences are either all increasing or all decreasing.
- It also checks if the differences are between 1 and 3.
- If the levels meet all the criteria, the function returns true; otherwise, it returns false.

3. Count the number of safe reports
- The function countSafeReports reads the levels from the input file and counts the number of safe reports.
- It iterates through each level, checks if it is safe using the isSafe function, and increments the safeCount if the level is safe.

4. Print the result
- The final count of safe reports is printed to the console.

</details>

<details>
<summary>Part 2</summary>

# Code
```javascript
const fs = require("fs");

function isSafe(levels) {
  const nums = levels.split(" ").map(Number);

  const differences = [];
  for (let i = 0; i < nums.length - 1; i++) {
    differences.push(nums[i + 1] - nums[i]);
  }

  let allIncreasing = true;
  let allDecreasing = true;
  for (const diff of differences) {
    if (diff <= 0) {
      allIncreasing = false;
    }
    if (diff >= 0) {
      allDecreasing = false;
    }
  }

  if (!allIncreasing && !allDecreasing) {
    return false;
  }

  for (const diff of differences) {
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }
  }

  return true;
}

function isSafeWithDampener(levels) {
  const nums = levels.split(" ").map(Number);

  for (i = 0; i < nums.length; i++) {
    let newLevels = "";
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        newLevels += nums[j] + " ";
      }
    }

    if (isSafe(newLevels.trim())) {
      return true;
    }
  }
  return false;
}

function countSafeReportsWithDampener(filename) {
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.trim().split("\n");

  let safeCount = 0;

  for (const line of lines) {
    if (isSafeWithDampener(line.trim())) {
      safeCount++;
    }
  }
  return safeCount;
}

console.log(countSafeReportsWithDampener("input2.txt"));

```

# What it does

The code reads the input file and checks if the levels are safe with a dampener.
The levels are considered safe with a dampener if they meet the following criteria:
- The differences between the levels are either increasing or decreasing.
- The differences between the levels are between 1 and 3.
- If a single level is removed, the remaining levels are still safe.
The code counts the number of safe reports with a dampener and prints the count to the console.

## How the code works

1. Read the input file
- The function uses the Node.js fs module to read the file at the specified input path.
- It reads the file synchronously and splits the contents into lines for processing.

2. Check if the levels are safe
- The function isSafe takes a string of levels as input and checks if the levels are safe.
- It splits the levels into numbers and calculates the differences between adjacent levels.
- It checks if the differences are either all increasing or all decreasing.
- It also checks if the differences are between 1 and 3.
- If the levels meet all the criteria, the function returns true; otherwise, it returns false.

3. Check if the levels are safe with a dampener
- The function isSafeWithDampener takes a string of levels as input and checks if the levels are safe with a dampener.
- It removes one level at a time and checks if the remaining levels are safe using the isSafe function.
- If the remaining levels are safe after removing a single level, the function returns true; otherwise, it returns false.

4. Count the number of safe reports with a dampener
- The function countSafeReportsWithDampener reads the levels from the input file and counts the number of safe reports with a dampener.
- It iterates through each level, checks if it is safe with a dampener using the isSafeWithDampener function, and increments the safeCount if the level is safe with a dampener.

5. Print the result
- The final count of safe reports with a dampener is printed to the console.

</details>
</details>
