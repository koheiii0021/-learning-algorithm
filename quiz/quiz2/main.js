const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const result = data
    .filter(data => data.price >= 1000 && data.stock >= 1)
    .sort((a, b) => a.price - b.price);

for(const item of result){
    console.log(`${item.name} ${item.price}`);
};


    
 


