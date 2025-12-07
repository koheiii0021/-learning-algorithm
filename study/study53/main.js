const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);

const dp = Array(S + 1).fill(false);
dp[0] = true;

for(let i = 0; i < N; i++ ){
    for(let j = S; j >= a[i]; j--){
        if(dp[j - a[i]]){
            dp[j] = true;
        }
    }
}

console.log(dp[S] ? "Yes" : "No");