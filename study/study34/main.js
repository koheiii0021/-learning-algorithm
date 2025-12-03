const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, D] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

function canFinish(X) {
    let days = 1;
    let current = 0;

    for(let i = 0; i < N; i++){
        const work = A[i];

        if(work > X) return false;

        if(current + work <= X){
            current += work;
        } else {
            days++;
            current = work;
        }
    }

    return days <= D;
}

let low = 0;
let high = 0;

for(let i = 0; i < N; i++){
    const w = A[i];

    if(w > low) low = w;
    high += w;
}

while(low < high){
    const mid = Math.floor((low + high) / 2);
    
    if(canFinish(mid)){
        high = mid;
    } else {
        low = mid + 1;
    }
}

const answer = low;

console.log(answer);