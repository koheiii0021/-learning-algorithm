const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const arr = input[1].split(" ").map(Number);
const sum = arr.reduce((acc, item) => acc + item, 0);

console.log(sum);