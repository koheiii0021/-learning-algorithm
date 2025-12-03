const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const grid = input.slice(1).map(row => row.split(" ").map(Number));

