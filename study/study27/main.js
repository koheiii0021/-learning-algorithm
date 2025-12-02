const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = input[1];

const arr = data.split(" ").map(Number).filter(a => a % 3 === 0);

if(arr.length === 0){
    console.log("none")
}else{
    arr.sort((a, b) => a - b);
    console.log(arr.join(" "));
};

