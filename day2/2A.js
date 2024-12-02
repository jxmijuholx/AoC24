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
