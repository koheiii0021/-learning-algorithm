const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const dp = Array(N + 1).fill(0);

dp[0] = 0;

for(let i = 1; i <= N; i++){
    let minCoins = dp[i - 1];

    if(i >= 5){
        minCoins = Math.min(minCoins, dp[i - 5]);
    }

    if(i >= 10){
        minCoins = Math.min(minCoins, dp[i - 10]);
    }

    dp[i] = minCoins + 1;
}

console.log(dp[N])