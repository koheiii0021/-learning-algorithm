const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

const sortedTask = [...data].sort((a, b) => {
    if(a.due !== b.due){
        return a.due.localeCompare(b.due);
    };
    return a.priority - b.priority;
});

sortedTask.forEach(item => 
    console.log(`${item.title} (${item.due}) [${item.priority}]`)
);