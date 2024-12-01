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
