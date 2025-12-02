const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let sum = 0;
let left = 0;
let count = 0;

for(let right = 0; right < N; right++){
    sum += A[right];
        
    while(sum > K){
        sum -= A[left];
        left++;
    }

    count += right - left + 1;
}

console.log(count)