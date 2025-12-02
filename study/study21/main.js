const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const total = {};

for(const item of data){
    const name = item.customer;
    const amount = item.amount;
    total[name] = (total[name] || 0) + amount; 
    
};

const entries = Object.entries(total).sort((a, b) => {
    
    const sumA = a[1]
    const sumB = b[1]

    if(sumA !== sumB){
        return sumB - sumA;
    }
    return a[0].localeCompare(b[0]);
});

for(const [name, sum] of entries){
    console.log(`${name}: ${sum}`)
}