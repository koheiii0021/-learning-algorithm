const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const header = input[0].trim().split(",");
const rows = input.slice(1);

const data = rows.map(row => {
    const values = row.trim().split(",");
    const obj = {};
    header.forEach((h, i) => obj[h] = values[i]);
    return obj;
});

console.log(JSON.stringify(data, null, 2));