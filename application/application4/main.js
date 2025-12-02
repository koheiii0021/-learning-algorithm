const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const v = data.map(v => v.value);

const sum = v.reduce((acc, item) => acc + item, 0);
const max = Math.max(...v);
const min = Math.min(...v);

console.log(`Sum: ${sum}`);
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);
