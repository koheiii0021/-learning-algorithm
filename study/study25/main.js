const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const total = {};

for(const item of data){
    const date = item.date;
    const views = item.views;
    total[date] = (total[date] || 0) + views;
};

const entries = Object.entries(total).sort((a, b) => 
    a[0].localeCompare(b[0])
);

for(const [date, totalViews] of entries){
    console.log(`${date} ${totalViews}`);
};