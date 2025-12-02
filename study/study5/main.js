const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const total = data.reduce((acc, item) => acc + item.price * item.qty, 0);

console.log(`Total: ${total}`);