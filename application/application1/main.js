const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const sortedData = data
    .filter(data => data.score >= 80 && data.passed === true);

for(const item of sortedData){
    console.log(`${item.name} ${item.score}`)
};