const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);

for(let i = 0; i < M; i++){
    const [a, b] = input[i + 1].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

const visited = Array(N).fill(false);

function dfs(v) {
    visited[v] = true;

    for(const next of graph[v]){
        if(!visited[next]){
            dfs(next);
        }
    }
}

let count = 0;

for(let i = 0; i < N; i++){
    if(!visited[i]){
        count++;
        dfs(i)
    }
}

console.log(count);

