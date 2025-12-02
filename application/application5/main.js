const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const totals = {};

for(const item of data){
    const category = item.category;
    const price = item.price;
    totals[category] = (totals[category] || 0) + price;
};

const entries = Object.entries(totals).sort((a, b) => 
    a[0].localeCompare(b[0]));

for(const [result, sum] of entries){
    console.log(`${result}: ${sum}`);
};