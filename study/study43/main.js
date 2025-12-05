const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);

for(let i = 0; i < M; i++){
    const [a, b] = input[i + 1].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

for(let i = 0; i < N; i++){
    graph[i].sort((a, b) => a - b);
}

for(let i = 0; i < N; i++){
    console.log(graph[i].join(" "));
}
