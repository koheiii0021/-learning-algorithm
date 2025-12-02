const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const arr = input[1].split(" ").map(Number);

const sortedArr = arr
    .filter(a => a >= 10)
    .sort((a, b) => a - b)
    .join(" ");

console.log(sortedArr);