const fs = require("fs");

function XMAS(haystack) {
  const rows = haystack.length;
  const cols = haystack[0].length;
  let count = 0;

  for (i = 1; i < rows - 1; i++) {
    for (let j = 0; j < cols; j++) {
      if (haystack[i][j] === "A") {
        const diagonal1 =
          haystack[i - 1][j - 1] + haystack[i][j] + haystack[i + 1][j + 1];
        const diagonal2 =
          haystack[i - 1][j + 1] + haystack[i][j] + haystack[i + 1][j - 1];
        if (
          (diagonal1 === "MAS" || diagonal1 === "SAM") &&
          (diagonal2 === "MAS" || diagonal2 === "SAM")
        ) {
          count++;
        }
      }
    }
  }
  return count;
}

const input = fs.readFileSync("input4.txt", "utf8").trim();
const haystack = input.split("\n").map((line) => line.split(""));

console.log(XMAS(haystack));
