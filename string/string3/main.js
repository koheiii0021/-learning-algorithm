const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const text = input[0];

const onlyEnglish = text
    .split("")
    .filter(t => /[a-zA-Z]/.test(t))
    .join("");

console.log(onlyEnglish);
