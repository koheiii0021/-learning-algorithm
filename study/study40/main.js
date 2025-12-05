const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + H).map(row => row.trim().split(""));
const visited = Array.from({ length: H }, () => Array(W).fill(false));

function dfs(r, c) {
    visited[r][c] = true;

    const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dc = [-1, 0, 1, -1, 1, -1, 0, 1];

    for(let k = 0; k < 8; k++){
        const nr = r + dr[k];
        const nc = c + dc[k];

        if(nr < 0 || nr >= H || nc < 0 || nc >= W) continue;

        if(grid[nr][nc] === "#" && !visited[nr][nc]){
            dfs(nr, nc);
        }
    }
}

let count = 0;

for(let r = 0; r < H; r++){
    for(let c = 0; c < W; c++){
        if(grid[r][c] === "#" && !visited[r][c]){
            count++
            dfs(r, c);
        }
    }
}

console.log(count);