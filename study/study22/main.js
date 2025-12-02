const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const total = {};

for(const item of data){
    const path = item.path;
    const method = item.method;
    total[path + " " + method] = (total[path + " " + method]|| 0) + 1;
};

const entries = Object.entries(total).sort((a, b) => {
    if(a[1] !== b[1]){
        return b[1] - a[1];
        }
        return a[0].localeCompare(b[0])
});

for(const [path, sum,] of entries){
    console.log(`${path} ${sum}`);
}
