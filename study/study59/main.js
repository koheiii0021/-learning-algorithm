const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);

let left = 0;
let sum = 0;
let maxLen = 0;

//右を伸ばす
for(let right = 0; right < N; right++){
    sum += a[right];

    //合計がSを超えたら
    while(sum > S){
        sum -= a[left];
        left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
}

console.log(maxLen);