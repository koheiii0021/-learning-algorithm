const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const text = input[0];
const removechar = input[1];

const removeText = text
    .split("")
    .filter(t => t !== removechar)
    .join("");

console.log(removeText);