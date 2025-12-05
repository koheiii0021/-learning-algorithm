const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, Q] = input[0].split(" ").map(Number);
const parent = Array.from({ length: N}, (_, i) => i);

function find(x) {
    return parent[x] === x ? x : find(parent[x]);
}

function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if(rootX !== rootY){
        parent[rootX] = rootY;
    }
}

function same(x, y) {
    return find(x) === find(y);
}

for(let i = 0; i < Q; i++){
    const [op, a, b] = input[i + 1].split(" ").map(Number);
    if(op === 0) union(a, b);

    if(op === 1){
        same(a, b) ? console.log("Yes") : console.log("No");
    }
}