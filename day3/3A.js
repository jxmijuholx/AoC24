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
