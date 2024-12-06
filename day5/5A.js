const fs = require("fs");

const input = fs.readFileSync("input5.txt", "utf8").trim();
const lines = input.split("\n");

let rules = [];
let updates = [];

let i = 0;
for (; i < lines.length; i++) {
  if (lines[i] === "") {
    break;
  }
  rules.push(lines[i]);
}

for (i = i + 1; i < lines.length; i++) {
  updates.push(lines[i]);
}

let parsedRules = [];
for (let i = 0; i < rules.length; i++) {
  let parts = rules[i].split("|");
  parsedRules.push([Number(parts[0]), Number(parts[1])]);
}

let parsedUpdates = [];
for (let i = 0; i < updates.length; i++) {
  let updateParts = updates[i].split(",");
  let parsedUpdate = [];
  for (let j = 0; j < updateParts.length; j++) {
    parsedUpdate.push(Number(updateParts[j]));
  }
  parsedUpdates.push(parsedUpdate);
}

let answer = 0;

for (let i = 0; i < parsedUpdates.length; i++) {
  let update = parsedUpdates[i];
  let isValid = true;

  for (let j = 0; j < parsedRules.length; j++) {
    let before = parsedRules[j][0];
    let after = parsedRules[j][1];

    if (update.indexOf(before) !== -1 && update.indexOf(after) !== -1) {
      if (update.indexOf(before) > update.indexOf(after)) {
        isValid = false;
        break;
      }
    }
  }

  if (isValid) {
    let middle = Math.floor(update.length / 2);
    answer += update[middle];
  }
}
console.log(answer);
