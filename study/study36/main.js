const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, L] = input[0].split(" ").map(Number);
const intervals = [];

for(let i = 0; i < N; i++){
    const [s, t] = input[i + 1].split(" ").map(Number);
    intervals.push({s, t});
}

intervals.sort((a, b) => a.s - b.s);

let cur = 0;
let count = 0;
let i = 0;

while(cur < L){
    let best = cur;

    while(i < N && intervals[i].s <= cur){
        best = Math.max(best, intervals[i].t)
        i++
    }

    if(cur === best){
        console.log(-1);
        return;
    }

    cur = best;
    count++
}

console.log(count)