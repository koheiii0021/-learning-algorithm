const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const data = JSON.parse(input.join(""));

for(const member of data.members){
    const skills = `${member.skills.join(", ")}`
    console.log(`${member.name}: ${skills}`)
};