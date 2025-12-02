const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const text = input[0];
const n = input[1];

const result = text
    .split("")
    .filter(text => text !== n)
    .join("")

console.log(result);
