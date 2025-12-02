const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const d1 = new Date(input[0]);
const d2 = new Date(input[1]);

const diffMs = d2 - d1;
const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

console.log(diffDays);