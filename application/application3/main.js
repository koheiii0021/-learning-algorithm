const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

for(const item of data.members.filter(m => m.exp >= 3)){
    console.log(`${item.name}: ${item.skills.join(", ")}`);
};