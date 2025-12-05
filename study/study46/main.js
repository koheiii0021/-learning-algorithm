const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const graph = Array.from({ length: N }, () => []);

for(let i = 0; i < N; i++){
    const [a, b] = input[i + 1].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}




