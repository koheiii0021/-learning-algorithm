const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = input[0];

const newDate = data.split("/").join("-")
console.log(newDate);