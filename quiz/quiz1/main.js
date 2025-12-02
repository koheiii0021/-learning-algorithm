const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

for(const item of data){
    const fullName = `${item.first} ${item.last}`;
    console.log(`${fullName}: ${item.age} Age, ${item.dept}`);
};