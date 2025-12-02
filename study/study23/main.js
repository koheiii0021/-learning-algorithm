const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const counts = {};

for(const item of data){
    const category = item.category;
    const stock = item.stock;
    counts[category] = (counts[category] || 0) + stock;
};

const entries = Object.entries(counts).sort((a, b) => 
    a[0].localeCompare(b[0])
);

for(const [cate, count] of entries){
    console.log(`${cate}: ${count}`);
};