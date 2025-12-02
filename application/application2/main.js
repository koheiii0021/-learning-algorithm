const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const sortedData = data.sort((a, b) => {
    if(a.score !== b.score){
        return b.score - a.score;
    }
    return a.age - b.age;
});

for(const item of sortedData){
    console.log(`${item.name} ${item.score}`)
};