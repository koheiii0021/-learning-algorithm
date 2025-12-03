const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const L = input[1].split(" ").map(Number);


function canMake(len) {

    let count = 0;

    for(let i = 0; i < N; i++){
        count += Math.floor((L[i] / len));
    }
    return count >= K;
}

let low = 0;
let high = 0;

for(let i = 0; i < N; i++){
    const l = L[i];

    if(l > high) high = l;
}

while(low < high){
    const mid = Math.floor((low + high + 1) / 2);

    if(canMake(mid)){
        low = mid;
    } else {
        high = mid - 1;
    }
}

console.log(low)