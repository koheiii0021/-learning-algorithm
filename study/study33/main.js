const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let left = 0;
let count = 0;
let ones = 0;

for(let right = 0; right < N; right++){

    if(A[right] === 1) ones++;;

    while(ones > K){
        if(A[left] === 1) ones--;
        left++
    }

     count += right - left + 1;
}

console.log(count)