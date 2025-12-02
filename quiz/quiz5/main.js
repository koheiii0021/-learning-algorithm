const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const text = input[0];


const reverseText = text
    .split("")
    .reverse()
    .join("");

console.log(reverseText);