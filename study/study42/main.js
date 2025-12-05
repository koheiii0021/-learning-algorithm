const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const grid = input.slice(1).map(row => row.trim().split(""));
const dist = Array.from({ length: H}, () => Array(W).fill(-1));

function multiBfs() {
    const queue = [];

    for(let r = 0; r < H; r++){
        for(let c = 0; c < W; c++){
            if(grid[r][c] === "E"){
                queue.push([r, c]);
                dist[r][c] = 0;
            }
        }
    }

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    while(queue.length > 0){
        const [r, c] = queue.shift();

        for(let k = 0; k < 4; k++){
            const nr = r + dr[k];
            const nc = c + dc[k];

            if(nr < 0 || nr >= H || nc < 0 || nc >= W) continue;

            if(grid[nr][nc] === "#") continue;
            if(dist[nr][nc] !== -1) continue;

            dist[nr][nc] = dist[r][c] + 1;
            queue.push([nr, nc]);
        }
    }
}

multiBfs();

let pr, pc;
for(let r = 0; r < H; r++){
    for(let c = 0; c < W; c++){
        if(grid[r][c] === "P"){
            pr = r;
            pc = c;
        }
    }
}

console.log(dist[pr][pc])

