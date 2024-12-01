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
