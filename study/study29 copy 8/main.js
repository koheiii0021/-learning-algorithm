const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, Q] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(Number);

function lowerBound(arr, target){
    let left = 0;
    let right = arr.length;

    while(left < right){
        const mid = Math.floor((left + right) / 2);
        const value = arr[mid];

        if(value >= target){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function upperBound(arr, target){
    let left = 0;
    let right = arr.length;

    while(left < right){
        const mid = Math.floor((left + right) / 2);
        const value = arr[mid];

        if(value > target){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

const result = [];

for(let i = 0; i < Q; i++){
    const x = queries[i];
    const leftIdx = lowerBound(A, x);
    const rightIdx = upperBound(A, x);

    const count = rightIdx - leftIdx;  
    result.push(count);  
}

console.log(result.join("\n")) //easy