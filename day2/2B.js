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
