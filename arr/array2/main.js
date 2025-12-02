const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const arr = input[1].split(" ").map(Number);

const maxNumber = Math.max(...arr);
const minNumber = Math.min(...arr);

console.log(`max: ${maxNumber}`);
console.log(`min: ${minNumber}`);