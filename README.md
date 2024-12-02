# Advent of Code 2024

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
