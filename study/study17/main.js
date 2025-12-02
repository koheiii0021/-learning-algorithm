const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const total = {};

for(const item of data){
    const user = item.user;
    total[user] = (total[user] || 0) + 1;
};

const entries = Object.entries(total).sort((a, b) => 
    a[0].localeCompare(b[0])
);

for(const [name, count] of entries){
    console.log(`${name}: ${count}`)
};