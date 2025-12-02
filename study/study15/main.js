const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = input[1].split(" ").map(Number);

const sum = data.reduce((acc, item) => acc + item, 0);
const max = Math.max(...data);
const min = Math.min(...data);
console.log(`${sum}`);
console.log(`${max}`);
console.log(`${min}`);