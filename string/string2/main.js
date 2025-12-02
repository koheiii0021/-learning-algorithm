const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const text = input[0];

const isNunText = text
    .split("")
    .filter(t => /[0-9]/.test(t))
    .join("");

console.log(isNunText);