const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const keys = Object.keys(data[0]);
const header = keys.join(",");

const rows = data.map(item => keys.map(key => item[key]).join(","));

console.log([header, ...rows].join("\n"));
