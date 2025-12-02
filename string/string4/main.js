const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const text = input[0];
const condition = input[1];

const lowerCaseText = condition === "lower"
    ? text.toLowerCase()
    : text.toUpperCase()

console.log(lowerCaseText);