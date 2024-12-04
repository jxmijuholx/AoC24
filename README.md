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

<details>
<summary>Day 3 solution</summary>
<br>
<details>
<summary>Part 1</summary>
<br>

# Code
```javascript
const fs = require("fs");

const data = fs.readFileSync("input3.txt", "utf8");

const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

const matches = data.match(regex);

console.log(matches);

function calculation(matches) {
  let sum = 0;
  matches.forEach((match) => {
    const numbers = match.match(/\d{1,3}/g);
    sum += numbers[0] * numbers[1];
  });
  return sum;
}

console.log(calculation(matches));
```

# What it does

The code reads the input file and processes multiplication expressions in the format `mul(x,y)`.
It extracts all such expressions from the input file and calculates the sum of all multiplications.

## How the code works

1. Read the input file
- The code uses the Node.js fs module to read the file synchronously.
- It reads the entire file content as a UTF-8 encoded string.

2. Define the regular expression
- A regular expression is defined to match patterns in the format `mul(x,y)`.
- The regex `/mul\((\d{1,3}),(\d{1,3})\)/g` matches:
  - `mul` literally
  - Numbers between 1-3 digits inside parentheses
  - Separated by a comma
  - The 'g' flag makes it match all occurrences

3. Extract matches
- The `data.match(regex)` extracts all matching patterns from the input text.
- Stores these matches in an array.

4. Calculate the sum
- The `calculation` function processes each matched expression:
  - Extracts the numbers from each match
  - Multiplies them together
  - Adds the result to a running sum
- Returns the final sum of all multiplications

5. Print results
- The matched expressions and final sum are printed to the console.

</details>

<details>
<summary>Part 2</summary>

# Code
```javascript
const fs = require("fs");

const data = fs.readFileSync("input3.txt", "utf8");

const regex = /(?:do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\))/g;

let mulEnabled = true;
let sum = 0;

while ((match = regex.exec(data)) !== null) {
  if (match[0] === "do()") {
    mulEnabled = true;
  } else if (match[0] === "don't()") {
    mulEnabled = false;
  } else if (mulEnabled) {
    sum += parseInt(match[1]) * parseInt(match[2]);
  }
}

console.log(sum);
```

# What it does

The code reads the input file and processes multiplication expressions along with control commands (`do()` and `don't()`).
It only performs multiplications when they are enabled by the control commands and calculates the sum of allowed multiplications.

## How the code works

1. Read the input file
- The code uses the Node.js fs module to read the file synchronously.
- It reads the entire file content as a UTF-8 encoded string.

2. Define the enhanced regular expression
- A more complex regex is used to match three types of patterns:
  - `do()`
  - `don't()`
  - `mul(x,y)` where x and y are 1-3 digit numbers
- The regex uses non-capturing groups `(?:...)` to match all pattern types

3. Process the commands sequentially
- Uses `regex.exec()` in a while loop to process matches one at a time
- Maintains a `mulEnabled` flag to track whether multiplications should be performed
- For each match:
  - If it's `do()`, enables multiplications
  - If it's `don't()`, disables multiplications
  - If it's a multiplication and multiplications are enabled, performs the calculation

4. Calculate controlled sum
- Only adds multiplication results to the sum when `mulEnabled` is true
- Uses `parseInt()` to convert matched strings to numbers
- Multiplies the numbers and adds to running sum

5. Print result
- The final sum of all enabled multiplications is printed to the console

</details>
</details>
<details>
<summary>Day 4 solution</summary>
<br>
<details>
<summary>Part 1</summary>
<br>

# Code
```javascript
const fs = require("fs");

function XMAS(input) {
  const haystack = fs
    .readFileSync(input, "utf-8")
    .trim()
    .split("\n")
    .map((line) => line.trim());

  const rows = haystack.length;
  const cols = haystack[0].length;
  const needle = "XMAS";
  const needle_len = needle.length;

  function right(x, y) {
    if (y + needle_len > cols) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x][y + i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function left(x, y) {
    if (y - needle_len + 1 < 0) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x][y - i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function down(x, y) {
    if (x + needle_len > rows) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x + i][y] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function up(x, y) {
    if (x - needle_len + 1 < 0) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x - i][y] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function down_right(x, y) {
    if (x + needle_len > rows || y + needle_len > cols) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x + i][y + i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function down_left(x, y) {
    if (x + needle_len > rows || y - needle_len + 1 < 0) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x + i][y - i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function up_right(x, y) {
    if (x - needle_len + 1 < 0 || y + needle_len > cols) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x - i][y + i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function up_left(x, y) {
    if (x - needle_len + 1 < 0 || y - needle_len + 1 < 0) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x - i][y - i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  let count = 0;
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (haystack[x][y] === "X") {
        if (right(x, y)) count++;
        if (left(x, y)) count++;
        if (down(x, y)) count++;
        if (up(x, y)) count++;
        if (down_right(x, y)) count++;
        if (down_left(x, y)) count++;
        if (up_right(x, y)) count++;
        if (up_left(x, y)) count++;
      }
    }
  }
  return count;
}

const input = "input4.txt";
console.log(XMAS(input));

```

# What it does

This code solves a word search puzzle looking for the word "XMAS" in a grid of letters. It searches in 8 different directions:
- Right (→)
- Left (←)
- Down (↓)
- Up (↑)
- Down-right (↘)
- Down-left (↙)
- Up-right (↗)
- Up-left (↖)

The code counts how many times "XMAS" appears in all these directions throughout the grid.

## How the code works

1. Read and Process Input
- Uses `fs.readFileSync` to read the input file
- Splits the input into lines and trims whitespace
- Creates a grid where `rows` = number of lines and `cols` = length of each line

2. Direction Check Functions
The code has 8 functions to check for "XMAS" in different directions:

`right(x, y)`:
- Checks if "XMAS" appears to the right of position (x,y)
- First verifies there's enough space to the right
- Compares each character with the expected letter

`left(x, y)`:
- Similar to right, but checks leftward
- Verifies enough space exists to the left
- Checks characters in reverse

`down(x, y)`:
- Checks downward from position
- Verifies enough rows below
- Compares characters vertically down

`up(x, y)`:
- Checks upward from position
- Verifies enough rows above
- Compares characters vertically up

`down_right(x, y)`:
- Checks diagonally down-right
- Verifies space in both directions
- Compares characters diagonally

`down_left(x, y)`, `up_right(x, y)`, `up_left(x, y)`:
- Check remaining diagonal directions
- Each verifies appropriate space exists
- Compare characters along their respective diagonals

3. Main Search Logic
- Iterates through every position in the grid
- When it finds an 'X', checks all 8 directions
- Increments counter for each successful find
- Returns total count of "XMAS" occurrences

4. Boundary Checking
- Each direction function first checks if the word would fit within grid boundaries
- Prevents array index out of bounds errors
- Only proceeds with character checking if boundaries are valid

5. Character Matching
- Compares each character in the pattern "XMAS"
- Returns false immediately if any character doesn't match
- Returns true only if all characters match in sequence


### Detailed Direction Check Explanations

1. **Right Check (→)**
```javascript
function right(x, y) {
    if (y + needle_len > cols) {  // Boundary check
        return false;
    }
    for (let i = 0; i < needle_len; i++) {
        if (haystack[x][y + i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
```
Visual Example:
```
Grid Position:      For "XMAS", checking right:
[X][M][A][S][R]    Position (0,0)
[T][T][T][T][T]    Checks: (0,0)=X, (0,1)=M, (0,2)=A, (0,3)=S
```

2. **Left Check (←)**
```javascript
function left(x, y) {
    if (y - needle_len + 1 < 0) {  // Boundary check
        return false;
    }
    for (let i = 0; i < needle_len; i++) {
        if (haystack[x][y - i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
```
Visual Example:
```
Grid Position:      For "XMAS", checking left:
[R][S][A][M][X]    Position (0,4)
[T][T][T][T][T]    Checks: (0,4)=X, (0,3)=M, (0,2)=A, (0,1)=S
```

3. **Down Check (↓)**
```javascript
function down(x, y) {
    if (x + needle_len > rows) {  // Boundary check
        return false;
    }
    for (let i = 0; i < needle_len; i++) {
        if (haystack[x + i][y] !== needle[i]) {
            return false;
        }
    }
    return true;
}
```
Visual Example:
```
Grid Position:      For "XMAS", checking down:
[X][T][T]          Position (0,0)
[M][T][T]          Checks: (0,0)=X
[A][T][T]                   (1,0)=M
[S][T][T]                   (2,0)=A
[T][T][T]                   (3,0)=S
```

4. **Up Check (↑)**
```javascript
function up(x, y) {
    if (x - needle_len + 1 < 0) {  // Boundary check
        return false;
    }
    for (let i = 0; i < needle_len; i++) {
        if (haystack[x - i][y] !== needle[i]) {
            return false;
        }
    }
    return true;
}
```
Visual Example:
```
Grid Position:      For "XMAS", checking up:
[T][T][T]          Position (3,0)
[S][T][T]          Checks: (3,0)=X
[A][T][T]                   (2,0)=M
[M][T][T]                   (1,0)=A
[X][T][T]                   (0,0)=S
```

5. **Diagonal Checks**
```javascript
function down_right(x, y) {
    if (x + needle_len > rows || y + needle_len > cols) {
        return false;
    }
    for (let i = 0; i < needle_len; i++) {
        if (haystack[x + i][y + i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
```
Visual Example for Down-Right (↘):
```
Grid Position:      For "XMAS", checking down-right:
[X][T][T][T]       Position (0,0)
[T][M][T][T]       Checks: (0,0)=X
[T][T][A][T]                (1,1)=M
[T][T][T][S]                (2,2)=A
                            (3,3)=S
```

Key Points about Direction Checks:
1. **Boundary Checks**
   - Each function first verifies if the full word would fit in that direction
   - Uses `needle_len` (4 for "XMAS") to check boundaries
   - Prevents array index out of bounds errors

2. **Character Matching**
   - Uses a loop to check each character
   - Index `i` is used differently in each direction:
     - Right: adds to y (column)
     - Left: subtracts from y
     - Down: adds to x (row)
     - Up: subtracts from x
     - Diagonals: combines row and column changes

3. **Early Return**
   - Returns `false` as soon as any character doesn't match
   - Only returns `true` if all characters match

4. **Grid Navigation**
   - `x` represents the row (vertical position)
   - `y` represents the column (horizontal position)
   - Each function navigates the grid differently but uses the same pattern matching logic


</details>
</details>
