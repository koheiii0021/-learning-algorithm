const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = input[0].split("");
const filtered = data.filter(d => /[a-zA-Z]/.test(d)).join("");
console.log(filtered);