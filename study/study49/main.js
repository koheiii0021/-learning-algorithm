const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);

const pq = []

for(let i = 0; i < N; i++){
    const task = Number(input[i + 1]);
    pq.push(task);
}

pq.sort((a, b) => a - b);

const result = [];

for(let i = 0; i < N; i++){
    const min = pq.shift();
    result.push(min);
}

console.log(result.join(" "))
