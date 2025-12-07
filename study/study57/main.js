const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array(N).fill(0);

function find(x) {
    if(graph[x] === x){

    }
}


function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if(rootX === rootY){
        rootX[x] = rootY; 
    }
}

function same(x, y) {
    return find(x) === find(y);
}

let count = 0;

for(let i = 0; i < M; i++){
    const [a, b] = input[i + 1].split(" ").map(Number);

    if()
}