const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const toMinutes = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
};

const total = data.reduce((acc, item) => {
    return acc + (toMinutes(item.end) - toMinutes(item.start))
},0);

const totalH = total % 60;
console.log(`Total: ${totalH}`);