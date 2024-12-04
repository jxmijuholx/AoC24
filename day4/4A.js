const fs = require("fs");

function XMAS(input) {
  const haystack = fs
    .readFileSync(input, "utf-8")
    .trim()
    .split("\n")
    .map((line) => line.trim());

  const rows = haystack.length;
  const cols = haystack[0].length;
  const needle = "XMAS";
  const needle_len = needle.length;

  function right(x, y) {
    if (y + needle_len > cols) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x][y + i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function left(x, y) {
    if (y - needle_len + 1 < 0) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x][y - i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function down(x, y) {
    if (x + needle_len > rows) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x + i][y] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function up(x, y) {
    if (x - needle_len + 1 < 0) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x - i][y] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function down_right(x, y) {
    if (x + needle_len > rows || y + needle_len > cols) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x + i][y + i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function down_left(x, y) {
    if (x + needle_len > rows || y - needle_len + 1 < 0) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x + i][y - i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function up_right(x, y) {
    if (x - needle_len + 1 < 0 || y + needle_len > cols) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x - i][y + i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  function up_left(x, y) {
    if (x - needle_len + 1 < 0 || y - needle_len + 1 < 0) {
      return false;
    }
    for (let i = 0; i < needle_len; i++) {
      if (haystack[x - i][y - i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }

  let count = 0;
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (haystack[x][y] === "X") {
        if (right(x, y)) count++;
        if (left(x, y)) count++;
        if (down(x, y)) count++;
        if (up(x, y)) count++;
        if (down_right(x, y)) count++;
        if (down_left(x, y)) count++;
        if (up_right(x, y)) count++;
        if (up_left(x, y)) count++;
      }
    }
  }
  return count;
}

const input = "input4.txt";
console.log(XMAS(input));
