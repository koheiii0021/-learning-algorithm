const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

data.forEach(item => 
    console.log(`${item.name} (${item.age}) - ${item.city}`)
);