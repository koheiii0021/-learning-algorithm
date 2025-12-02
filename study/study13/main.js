const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const toMinutes = (strTime) => {
    const [h, m] = strTime.split(":").map(Number)
    return h * 60 + m
};

const firstTime = input[0].trim();
const secondTime = input[1].trim();

const result = toMinutes(firstTime) <= toMinutes(secondTime) ? firstTime : secondTime;

console.log(result);