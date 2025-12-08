const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + H).map(row => row.trim().split(""));
const dist = Array.from({ length: H }, () => Array(W).fill(-1));


//Start Goal
let sr, sc, gr, gc;
for(let r = 0; r < H; r++){
    for(let c = 0; c < W; c++){
        if(grid[r][c] === "S"){ sr = r; sc = c; }
        if(grid[r][c] === "G"){ gr = r; gc = c; }
    }
}

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const queue = [];
queue.push([sr, sc]);
dist[sr][sc] = 0;


while(queue.length > 0){
    const [r, c] = queue.shift();

    for(let k = 0; k < 4; k++){
        const nr = r + dr[k];
        const nc = c + dc[k];

        if(nr < 0 || nr >= H || nc < 0 || nc >= W ) continue;
        if(grid[nr][nc] === "#") continue;
        if(dist[nr][nc] !== -1) continue;

        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
    }
}

console.log(dist[gr][gc])