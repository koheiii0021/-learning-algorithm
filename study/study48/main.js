const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const parent = Array.from({ length: N }, (_, i) => i);

function find(x) {
    if(parent[x] === x) return x;
        return find(parent[x]);
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

for(let i = 0; i < M; i++){
    const [a, b] = input[i + 1].split(" ").map(Number);
    union(a, b);
}

let count = 0;

for(let i = 0; i < N; i++){
    if(find(i) === i){
        count++
    }
}

console.log(count);