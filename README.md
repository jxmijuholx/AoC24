# Advent of Code 2024

<details>
<summary>Day 1 solution</summary>
<br>
    # Day 1: first part

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

    ## Code Breakdown

    ### 1. Initial Setup
    - Imports the Node.js `fs` module for file operations
    - Declares arrays for storing:
      - `left` numbers
      - `right` numbers
      - `differences` between paired numbers
    - Initializes `sum` variable to 0

    ### 2. File Reading
    ```javascript
    fs.readFile(input, "utf8", (err, data) => {
      // ... code continues
    });
    ```
    - Reads input file asynchronously
    - Handles potential errors in file reading

    ### 3. Data Processing
    - Splits input data into lines
    - For each line:
      - Splits into two numbers
      - Stores first number in `left` array
      - Stores second number in `right` array

    ### 4. Array Sorting
    ```javascript
    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);
    ```
    - Both arrays are sorted in ascending order

    ### 5. Calculating Differences
    - Calculates absolute difference between corresponding elements
    - Stores differences in `differences` array
    - Sums up all differences

    ## Example

    Given input.txt:
    ```
    1 4
    3 1
    2 2
    ```

    ### Process:
    1. **Initial Arrays:**
       - left: [1, 3, 2]
       - right: [4, 1, 2]

    2. **After Sorting:**
       - left: [1, 2, 3]
       - right: [1, 2, 4]

    3. **Differences:**
       - |1-1| = 0
       - |2-2| = 0
       - |3-4| = 1

    4. **Final Sum:** 0 + 0 + 1 = 1

  # Day 1: second part

   # Code Explanation in Markdown

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

   ## Code Breakdown

   ### 1. Initial Setup
   - Imports the Node.js `fs` module for file operations
   - Declares arrays for storing:
     - `left` numbers
     - `right` numbers

   ### 2. File Reading
   ```javascript
   fs.readFile(input, "utf8", (err, data) => {
     // ... code continues
   });
   ```
   - Reads input file asynchronously
   - Handles potential errors in file reading

   ### 3. Data Processing
   - Splits input data into lines
   - For each line:
     - Splits into two numbers
     - Stores first number in `left` array
     - Stores second number in `right` array

   ### 4. Calculating Appearances
   ```javascript
   const appearances = {};
   for (let i = 0; i < right.length; i++) {
     const number = right[i];
     if (appearances[number] === undefined) {
       appearances[number] = 1;
     } else {
       appearances[number]++;
     }
   }
   ```
   - Creates an object to store frequency of numbers in `right` array
   - Counts how many times each number appears

   ### 5. Calculating Similarity Score
   ```javascript
   for (let i = 0; i < left.length; i++) {
     const j = left[i];
     if (appearances[j] !== undefined) {
       similarityScore += appearances[j] * j;
     }
   }
   ```
   - For each number in `left` array:
     - If the number exists in appearances object
     - Adds (number × its frequency in right array) to similarity score

   ## Example

   Given input.txt:
   ```
   1 2
   2 2
   3 1
   ```

   ### Process:
   1. **Initial Arrays:**
      - left: [1, 2, 3]
      - right: [2, 2, 1]

   2. **Appearances Object:**
      ```javascript
      {
        '1': 1,  // number 1 appears once
        '2': 2   // number 2 appears twice
      }
      ```

   3. **Similarity Score Calculation:**
      - For 1 in left: 1 × 1 = 1 (appears once in right)
      - For 2 in left: 2 × 2 = 4 (appears twice in right)
      - For 3 in left: 0 (doesn't appear in right)
      - Total: 1 + 4 = 5
</details>

<details>
<summary>Day 2 solution</summary>
<br>

</details>

<details>
<summary>Day 3 solution</summary>
<br>

</details>
