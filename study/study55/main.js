const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);

const INF = Infinity;
const dist = Array(N).fill(INF);
dist[0] = 0;

for(let i = 0; i < M; i++){
    const [a, b, c] = input[i + 1].split(" ").map(Number);
    graph[a].push([b, c]);
    graph[b].push([a, c]);
}

const pq = [];
pq.push([0, 0]);

while(pq.length > 0){
    pq.sort((a, b) => a[0] - b[0]);
    const [d, v] = pq.shift();

    if(d > dist[v]) continue;

    for(const [next, weight] of graph[v]){
        if(dist[v] + weight < dist[next]){
            dist[next] = dist[v] + weight;
            pq.push([dist[next], next]);
        }
    }
}

console.log(dist[N - 1] === INF ? -1 : dist[N- 1]);
