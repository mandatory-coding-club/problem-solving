let input = require("fs").readFileSync(0, "utf8");
const students = {}
for (let i=0;i<30;i++){
    students[i+1]=true
}

const line = input.trim().split("\n").map(Number)
for(let n of line){
    delete students[n]
}
console.log(Object.keys(students).join("\n"));
