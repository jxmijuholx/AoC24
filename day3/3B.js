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
