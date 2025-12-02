const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");


const arr = input[1].split(" ").map(Number);

const maxNum = Math.max(...arr);
const minNum = Math.min(...arr);

console.log(maxNum);
console.log(minNum);