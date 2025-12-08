const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);
const indegree = Array(N).fill(0);

for(let i = 0; i < M; i++){
    const [a, b] = input[i + 1].split(" ").map(Number);
    graph[a].push(b);
    indegree[b]++;
}

const queue = [];

for(let i = 0; i < N; i++){
    if(indegree[i] === 0){
        queue.push(i);
    }
}

const result = [];

while(queue.length > 0){
    const v = queue.shift();
    result.push(v);

    for(const next of graph[v]){
        indegree[next]--;
        if(indegree[next] === 0){
            queue.push(next);
        }
    }
}

console.log(result.join(" "));