const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const graph = Array.from({ length: N }, () => []);

for(let i = 0; i < N - 1; i++){
    const [a, b] = input[i + 1].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

function bfs(start) {
    const dist = Array(N).fill(-1);
    const queue = [];
    queue.push(start);
    dist[start] = 0;

    while(queue.length > 0){
        const v = queue.shift();
        for(const next of graph[v]){
            if(dist[next] === -1){
                dist[next] = dist[v] + 1;
                queue.push(next);
            }
        }
    }

    return dist;
}
 
const dist1 = bfs(0);
let farNode = 0;
for(let i = 0; i < N; i++){
    if(dist1[i] > dist1[farNode]){
        farNode = i;
    }
}

const dist2 = bfs(farNode);
let diameter = 0;
for(let i = 0; i < N; i++){
    if(dist2[i] > diameter){
        diameter = dist2[i];
    }
}

console.log(diameter);