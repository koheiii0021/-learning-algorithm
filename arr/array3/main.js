const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const arr = input[1].split(" ").map(Number);

const uniqe = [...new Set(arr)];

console.log(uniqe.join(" "));