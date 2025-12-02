const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let left = 0;
let maxLen = 0;
let oddCount = 0;

for(let right = 0; right < N; right++){
    
    if(A[right] % 2 !== 0) oddCount++

    while(oddCount > K){
        if(A[left] % 2 !== 0) oddCount--;
        left++;
    }

    const len = right - left + 1;
    if(len > maxLen) maxLen = len;
}

console.log(maxLen)