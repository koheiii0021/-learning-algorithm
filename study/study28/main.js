const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const total = {};

for(const item of data){
    const user = item.user;
    const score = item.score;
    total[user] = (total[user] || 0) + score;
};

const entries = Object.entries(total).sort((a, b) => {
    const totalA = a[1];
    const totalB = b[1];

    if(totalA !== totalB){
        return totalB - totalA;
    };
    return a[0].localeCompare(b[0]);
});

for(const [name, sum] of entries){
    console.log(`${name} ${sum}`);
};
