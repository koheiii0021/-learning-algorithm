const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const arr = input[1].split(" ").map(Number);

const sortedAsc = [...arr].sort((a, b) => a - b).join(" ");
const sortedDesc = [...arr].sort((a, b) => b - a).join(" ");

console.log(`asc: ${sortedAsc}`);
console.log(`desc: ${sortedDesc}`);