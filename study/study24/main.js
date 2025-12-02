const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const counts = {};

for(const item of data){
    const tags = item.tags;
    for(const tag of tags){
        counts[tag] = (counts[tag] || 0) + 1;
    };
};

const entries = Object.entries(counts).sort((a, b) => {
    const postA = a[1]
    const postB = b[1]
    if(postA !== postB){
        return postB - postA
    }
    return a[0].localeCompare(b[0]);
});

for(const [tag, count] of entries){
    console.log(`${tag}: ${count}`);
}